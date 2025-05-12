package kz.mental.AiService.service;

import kz.mental.AiService.client.OpenAiClient;
import kz.mental.AiService.dto.*;
import kz.mental.AiService.entity.JournalRecord;
import kz.mental.AiService.entity.OurUsers;
import kz.mental.AiService.repository.JournalRecordRepository;
import kz.mental.AiService.repository.OurUserRepo;
import kz.mental.AiService.utils.JwtParserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.*;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class JournalService {

    private final JournalRecordRepository repo;
    private static final DateTimeFormatter TIME_FMT = DateTimeFormatter.ofPattern("HH:mm");
    @Value("${spring.jwt.security}")
    private String secreteString;
    private final OurUserRepo ourUsersRepository;
    private final OpenAiClient openAiClient;
    private static final DateTimeFormatter OUT_FMT =
            DateTimeFormatter.ISO_OFFSET_DATE_TIME.withZone(ZoneId.of("Asia/Oral"));

    public JournalCreateResponseDto createRecord(String authHeader, JournalCreateRequestDto dto) {
        // 1. Вырезаем сам токен и достаём email
        String token = authHeader.replace("Bearer ", "");
        String email = JwtParserUtil.getSubjectFromToken(token, secreteString);

        // 2. Ищем пользователя
        OurUsers user = ourUsersRepository.findByEmail(email)
                .orElseThrow(() -> new NullPointerException("User not found: " + email));

        // 3. AI-анализ тона записи
        String entryText = dto.getEntry();
        // 3.1 Формируем system- и user-промпты на русском
        String systemText = """
        Вы — модуль для анализа тона дневниковых записей.
        Получив текст записи, вы должны вернуть ровно одно число:
        1 — если общий тон позитивный,
        2 — если общий тон негативный.
        Отвечайте только цифрой, без дополнительного текста.
        """;
        String userText = entryText;

        ChatCompletionRequest aiReq = new ChatCompletionRequest();
        aiReq.setModel("gpt-4o-mini");
        aiReq.setMessages(List.of(
                new Message("system", systemText),
                new Message("user",   userText)
        ));
        ChatCompletionResponse aiResp = openAiClient.createChatCompletion(aiReq);

        String rawTone = aiResp.getChoices().get(0).getMessage().getContent();
        // 3.2 Чистим всё, кроме цифр
        String cleanedTone = rawTone.replaceAll("\\D+", "");
        int aiCategory;
        try {
            aiCategory = Integer.parseInt(cleanedTone);
            if (aiCategory < 0 || aiCategory > 2) {
                aiCategory = 0; // безопасность
            }
        } catch (Exception e) {
            aiCategory = 0;
        }

        // 4. Собираем и сохраняем сущность
        JournalRecord rec = new JournalRecord();
        rec.setUser(user);
        rec.setTitle(dto.getTitle());
        rec.setEntry(entryText);
        rec.setStressLevel(dto.getStressLevel());
        rec.setEmotionId(dto.getEmotionId());
        rec.setStressor(dto.getStressor());
        rec.setAiCategory(aiCategory);
//        rec.setCreatedAt(Instant.now());
        rec = repo.save(rec);
        String formatted = OUT_FMT.format(rec.getCreatedAt());

        // 5. Возвращаем DTO
        return new JournalCreateResponseDto(
                rec.getId().toString(),
                rec.getTitle(),
                rec.getEntry(),
                rec.getStressLevel(),
                rec.getEmotionId(),
                rec.getStressor(),
                formatted,
                rec.getAiCategory()
        );
    }

    private int analyzeSentiment(String text) {
        // TODO: вызвать OpenAI и распарсить ответ, чтобы вернуть 0|1|2
        return 0;
    }

    public List<JournalDayRecordDto> getRecordsForDate(LocalDate date) {
        Instant start = date.atStartOfDay(ZoneOffset.UTC).toInstant();
        Instant end   = date.plusDays(1).atStartOfDay(ZoneOffset.UTC).toInstant();

        return repo.findAllByCreatedAtBetweenOrderByCreatedAtDesc(start, end)
                .stream()
                .map(this::toDayDto)
                .collect(Collectors.toList());
    }

    private JournalDayRecordDto toDayDto(JournalRecord rec) {
        String time = rec.getCreatedAt().atOffset(ZoneOffset.UTC)
                .toLocalTime().format(TIME_FMT);
        String formatted = OUT_FMT.format(rec.getCreatedAt());

        return new JournalDayRecordDto(
                rec.getId().toString(),
                time,
                rec.getEmotionId(),
                rec.getTitle(),
                rec.getEntry(),
                rec.getStressLevel(),
                formatted,
                rec.getAiCategory() // здесь можно подставить AI-подсказки
        );
    }

    public AiRecordSuggestionDto getAiRecordSuggestion(Integer recordId) {
        // 1) Найти запись в БД по recordId
        // 2) Передать текст entry в AI-модель / свои алгоритмы
        // 3) Собрать recommendations — список с id, title, description
        // 4) Вернуть DTO; amount = recommendations.size()

        // stub для примера:
        var recs = List.of(
                new AiRecordSuggestionDto.RecommendationDto(1, "Дыхательная практика", "Сделайте 5 глубоких вдохов…"),
                new AiRecordSuggestionDto.RecommendationDto(2, "Мини-медитация", "Закройте глаза на 2 минуты…")
        );
        return new AiRecordSuggestionDto(recordId, recs.size(), recs);
    }

    public YearlyStatisticsResponse getYearlyStatistics(String authHeader, int year, int month) {
        if (month < 1 || month > 12 || year < 1900) {
            throw new IllegalArgumentException("Invalid month or year");
        }

        // 1) вытаскиваем токен
        // 2) извлекаем из него subject (email)
        String email = JwtParserUtil.getSubjectFromToken(authHeader,secreteString);

        // 3) считаем границы месяца
        LocalDateTime start = LocalDate.of(year, month, 1).atStartOfDay();
        LocalDateTime end   = start.plusMonths(1).minusNanos(1);

        // 4) грузим записи из БД
        List<JournalRecord> records = repo
                .findAllByUserEmailAndCreatedAtBetween(
                        email,
                        start.toInstant(ZoneOffset.UTC),
                        end.toInstant(ZoneOffset.UTC)
                );

        // 5) группируем по дню месяца, берём aiCategory последней записи в дне
        Map<Integer, Integer> dayToCat = records.stream()
                .collect(Collectors.toMap(
                        record -> {
                            // преобразуем Instant -> LocalDate в системе пользователя
                            return record.getCreatedAt()
                                    .atZone(ZoneId.systemDefault())
                                    .getDayOfMonth();
                        },
                        JournalRecord::getAiCategory,
                        (oldV, newV) -> newV
                ));

        // 6) формируем конечный список
        List<DayStatusDto> days = dayToCat.entrySet().stream()
                .sorted(Map.Entry.comparingByKey())
                .map(e -> new DayStatusDto(e.getKey(), e.getValue()))
                .collect(Collectors.toList());

        return new YearlyStatisticsResponse(days);
    }



}
