package kz.mental.AiService.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import kz.mental.AiService.client.OpenAiClient;
import kz.mental.AiService.dto.*;
import kz.mental.AiService.entity.OurUsers;
import kz.mental.AiService.entity.SleepCategory;
import kz.mental.AiService.entity.SleepEntry;
import kz.mental.AiService.repository.OurUserRepo;
import kz.mental.AiService.repository.SleepCategoryRepository;
import kz.mental.AiService.repository.SleepEntryRepository;
import kz.mental.AiService.utils.JwtParserUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.*;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class SleepService {
    @Value("${spring.jwt.security}")
    private String secreteString;
    private final SleepEntryRepository repo;
    private static final DateTimeFormatter TIME_FMT = DateTimeFormatter.ofPattern("HH:mm");
    private static final DateTimeFormatter DATE_FMT = DateTimeFormatter.ISO_LOCAL_DATE;
    private final OpenAiClient openAiClient;
    private final ObjectMapper mapper;
    private final OurUserRepo ourUserRepo;
    private final SleepCategoryRepository sleepCategoryRepository;
    @Value("${app.time-zone:Asia/Almaty}")    // можно определить в application.yml
    private String timeZone;
    public SleepEntryResponseDto createEntry(String authHeader,SleepEntryRequestDto dto) {
        String email = JwtParserUtil.getSubjectFromToken(authHeader, secreteString);
        OurUsers user = ourUserRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Пользователь не найден по email: " + email));
        // 1. Вычисляем продолжительность в часах
        Duration dur = Duration.between(dto.getStartTime(), dto.getEndTime());
        double hours = dur.toMinutes() / 60.0;

        // 2. Определяем код категории
        String catCode;
        if (hours >= 7)       catCode = "NORMAL";
        else if (hours >= 3 && hours <= 6)  catCode = "CORE";
        else  catCode = "INSOMNIAC";
// 3. Подгружаем сущность категории
        SleepCategory category = sleepCategoryRepository.findByCode(catCode)
                .orElseThrow(() -> new RuntimeException("Категория сна не найдена: " + catCode));

        // 3. Сохраняем
        SleepEntry entry = new SleepEntry();
        entry.setStartTime(dto.getStartTime());
        entry.setEndTime(dto.getEndTime());
        entry.setDate(dto.getStartTime().toLocalDate());
        entry.setDurationHours(hours);
        entry.setCategory(category);
        entry.setUser(user);

        entry = repo.save(entry);

        // 4. Маппим в DTO
        return new SleepEntryResponseDto(
                entry.getId().toString(),
                entry.getStartTime().format(TIME_FMT),
                entry.getEndTime().format(TIME_FMT),
                entry.getDate().format(DATE_FMT),
                entry.getCreatedAt().toString(),
                entry.getDurationHours(),
                entry.getCategory()
        );
    }
    // 2) Среднее время засыпания за последние 7 дней
    public AverageTimeResponseDto getAverageStartTime(String authHeader) {
        List<SleepEntry> list = last7Days(authHeader);
        double avgSec = list.stream()
                .mapToLong(e -> e.getStartTime().toLocalTime().toSecondOfDay())
                .average().orElse(0);
        LocalTime avgTime = LocalTime.ofSecondOfDay((long)avgSec);
        // для категории берём усреднённое время сна:
        double avgDuration = list.stream()
                .mapToDouble(e -> Duration.between(e.getStartTime(), e.getEndTime())
                        .toMinutes()/60.0)
                .average().orElse(0);
        return new AverageTimeResponseDto(
                avgTime.truncatedTo(ChronoUnit.MINUTES).toString(),
                categorize(avgDuration)
        );
    }

    // 3) Среднее время пробуждения за 7 дней
    public AverageTimeResponseDto getAverageEndTime(String authHeader) {
        List<SleepEntry> list = last7Days(authHeader);
        double avgSec = list.stream()
                .mapToLong(e -> e.getEndTime().toLocalTime().toSecondOfDay())
                .average().orElse(0);
        LocalTime avgTime = LocalTime.ofSecondOfDay((long)avgSec);
        double avgDuration = list.stream()
                .mapToDouble(e -> Duration.between(e.getStartTime(), e.getEndTime())
                        .toMinutes()/60.0)
                .average().orElse(0);
        return new AverageTimeResponseDto(
                avgTime.truncatedTo(ChronoUnit.MINUTES).toString(),
                categorize(avgDuration)
        );
    }

    // 4) Часы сна за сегодня
    public TodayDurationResponseDto getTodayDuration(String authHeader) {
        // 1. Извлечь email
        String email = JwtParserUtil.getSubjectFromToken(authHeader, secreteString);

        // 2. Граница «сегодня» в нужном часовом поясе
        ZoneId userZone = ZoneId.of(timeZone);
        LocalDate today = LocalDate.now(userZone);
        LocalDateTime start = today.atStartOfDay(userZone).toLocalDateTime();
        LocalDateTime end   = today.plusDays(1).atStartOfDay(userZone).toLocalDateTime();

        // 3. Берём записи по endTime (т.е. все записи, где проснулись сегодня)
        List<SleepEntry> dayList = repo.findByUserEmailAndEndTimeBetween(email, start, end);

        // 4. Суммируем полную длительность (включая часть перед полночью)
        double total = dayList.stream()
                .mapToDouble(e -> Duration.between(e.getStartTime(), e.getEndTime())
                        .toMinutes() / 60.0)
                .sum();

        // 5. Возвращаем DTO
        return new TodayDurationResponseDto(total, categorize(total));
    }


    // 5) Средний сон за 7 дней
    public AverageWeeklyDurationResponseDto getAverageWeeklyDuration(String authHeader) {
        List<SleepEntry> list = last7Days(authHeader);
        double avg = list.stream()
                .mapToDouble(e -> Duration.between(e.getStartTime(), e.getEndTime())
                        .toMinutes()/60.0)
                .average().orElse(0);
        return new AverageWeeklyDurationResponseDto(avg, categorize(avg));
    }

    // 6) История сна за 7 дней
    public WeeklyHistoryResponseDto getWeeklyHistory(String authHeader, LocalDate startDate, LocalDate endDate) {
        // 1. Получаем все записи между startDate 00:00 и endDate+1 00:00
        Instant start = startDate.atStartOfDay(ZoneOffset.UTC).toInstant();
        Instant end   = endDate.plusDays(1).atStartOfDay(ZoneOffset.UTC).toInstant();
        String email = JwtParserUtil.getSubjectFromToken(authHeader, secreteString);

        List<SleepEntry> entries = repo.findByUserEmailAndStartTimeBetween(email,
                LocalDateTime.ofInstant(start, ZoneOffset.UTC),
                LocalDateTime.ofInstant(end,   ZoneOffset.UTC)
        );

        // 2. Группируем по дате (LocalDate)
        Map<LocalDate, List<SleepEntry>> byDate = entries.stream()
                .collect(Collectors.groupingBy(e -> e.getStartTime().toLocalDate()));

        // 3. Собираем результат по каждому дню диапазона (включительно)
        List<DailySleepDto> days = new ArrayList<>();
        for (LocalDate d = startDate; !d.isAfter(endDate); d = d.plusDays(1)) {
            List<SleepEntry> dayEntries = byDate.getOrDefault(d, Collections.emptyList());
            double totalHours = dayEntries.stream()
                    .mapToDouble(e -> Duration.between(e.getStartTime(), e.getEndTime())
                            .toMinutes() / 60.0)
                    .sum();
            days.add(new DailySleepDto(
                    d.getDayOfMonth(),
                    totalHours,
                    categorize(totalHours)
            ));
        }

        return new WeeklyHistoryResponseDto(days);
    }

    // вспомогательное: последние 7 дней записей по пользователю
    private List<SleepEntry> last7Days(String authHeader) {
        String email = JwtParserUtil.getSubjectFromToken(authHeader, secreteString);
        LocalDateTime end = LocalDateTime.now();
        LocalDateTime start = end.minusDays(7);
        return repo.findByUserEmailAndStartTimeBetween(email, start, end);
    }

    // классификация по часам
    private int categorize(double hours) {
        String code = (hours >= 7 ) ? "NORMAL"
                : (hours >= 3 && hours < 7)   ? "CORE"
                :                               "INSOMNIAC";
        return sleepCategoryRepository.findByCode(code).get().getId();

    }


    public SleepAiSuggestionResponseDto getAiSleepSuggestion(String recordId, String authHeader) {
        // 1. Проверяем, что запись существует и принадлежит текущему пользователю
        String email = JwtParserUtil.getSubjectFromToken(authHeader, secreteString);
        SleepEntry entry = repo.findByIdAndUserEmail(
                UUID.fromString(recordId), email
        ).orElseThrow(() -> new IllegalArgumentException("Запись не найдена"));

        // 2. Строим system + user промпты на русском
        String systemText = """
        Вы — дружелюбный консультант по сну.
        Проанализируйте запись пользователя о сне и верните массив рекомендаций в формате JSON:
        [
          {
            "id": 1,
            "titleRu": "краткий заголовок рекомендации на русском",
            "titleKk":"краткий заголовок рекомендации на казахском",
            "descriptionRu": "подробное описание рекомендации на русском",
            "descriptionKk": "подробное описание рекомендации на казахском"
          },
          ...
        ]
        
        """;

        String userText = String.format(
                "Запись о сне: дата=%s, начало=%s, конец=%s, продолжительность=%.1f ч, категория=%s",
                entry.getDate(), entry.getStartTime(), entry.getEndTime(),
                entry.getDurationHours(), entry.getCategory()
        );

        // 3. Формируем запрос к OpenAI
        ChatCompletionRequest openAiReq = new ChatCompletionRequest();
        openAiReq.setModel("gpt-4o-mini");
        openAiReq.setMessages(List.of(
                new Message("system", systemText),
                new Message("user", userText)
        ));
        ChatCompletionResponse openAiResp = openAiClient.createChatCompletion(openAiReq);

        // 4. Берём контент первого выбора и чистим от markdown-блоков
        String raw     = openAiResp.getChoices().get(0).getMessage().getContent();
        String cleaned = raw;

        // Попытка вырезать чистый JSON из ```json … ```
        Matcher mJson = Pattern.compile("(?s)```json\\s*(\\[.*?\\])\\s*```").matcher(cleaned);
        if (mJson.find()) {
            cleaned = mJson.group(1);
        } else {
            // Убираем любые ```…```
            cleaned = cleaned.replaceAll("```.*?```", "").trim();
            // Ищем самый первый [ и последний ]
            int i1 = cleaned.indexOf('[');
            int i2 = cleaned.lastIndexOf(']');
            if (i1 >= 0 && i2 > i1) {
                cleaned = cleaned.substring(i1, i2 + 1);
            }
        }

        // Логируем для отладки
        log.debug("AI raw response:\n{}", raw);
        log.debug("AI cleaned JSON:\n{}", cleaned);

        // 5. Парсим в DTO
        List<SleepRecommendationDto> recs;
        try {
            recs = mapper.readValue(
                    cleaned,
                    new TypeReference<List<SleepRecommendationDto>>() {}
            );
        } catch (Exception e) {
            throw new RuntimeException(
                    "Не удалось распарсить ответ AI.\n=== RAW ===\n"
                            + raw + "\n=== CLEANED ===\n"
                            + cleaned, e
            );
        }

        // 6. Формируем финальный ответ
        return new SleepAiSuggestionResponseDto(recordId, recs.size(), recs);
    }
    public List<SleepCategoryDto> getAllCategories() {
        return sleepCategoryRepository.findAll()
                .stream()
                .map(cat -> new SleepCategoryDto(
                        cat.getId(),
                        cat.getCode(),
                        cat.getName(),
                        cat.getDescription()
                ))
                .collect(Collectors.toList());
    }

}
