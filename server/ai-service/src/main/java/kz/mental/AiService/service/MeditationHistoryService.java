package kz.mental.AiService.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import kz.mental.AiService.client.OpenAiClient;
import kz.mental.AiService.dto.*;
import kz.mental.AiService.entity.MeditationHistory;
import kz.mental.AiService.entity.OurUsers;
import kz.mental.AiService.repository.MeditationHistoryRepository;
import kz.mental.AiService.repository.OurUserRepo;
import kz.mental.AiService.utils.JwtParserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MeditationHistoryService {

    @Value("${spring.jwt.security}")
    private String secreteString;

    private final MeditationHistoryRepository historyRepo;
    private final OurUserRepo userRepo;
    private final OpenAiClient openAiClient;
    private final ObjectMapper mapper;

    public void saveOrUpdate(String authHeader, MeditationHistoryRequestDto dto) {
        String token = authHeader.replace("Bearer ", "");
        String email = JwtParserUtil.getSubjectFromToken(token, secreteString);

        OurUsers user = userRepo.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("User not found: " + email));

        MeditationHistory entry = historyRepo
                .findByUserAndCategoryIdAndMeditationId(user, dto.getCategoryId(), dto.getMeditationId())
                .orElseGet(() -> {
                    MeditationHistory m = new MeditationHistory();
                    m.setUser(user);
                    m.setCategoryId(dto.getCategoryId());
                    m.setMeditationId(dto.getMeditationId());
                    return m;
                });

        entry.setPosition(dto.getPosition());
        entry.setFinished(dto.getFinished());
        entry.setLastPlayedAt(dto.getLastPlayedAt());

        historyRepo.save(entry);
    }
    public Page<MeditationHistoryResponseDto> getHistory(String authHeader, Pageable pageable) {
        String email = JwtParserUtil.getSubjectFromToken(authHeader, secreteString);

        OurUsers user = userRepo.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("User not found: " + email));

        return historyRepo.findAllByUser(user, pageable)
                .map(this::toDto);
    }
    private MeditationHistoryResponseDto toDto(MeditationHistory e) {
        return new MeditationHistoryResponseDto(
                e.getCategoryId(),
                e.getMeditationId(),
                e.getPosition(),
                e.getFinished(),
                e.getLastPlayedAt()
        );
    }
    /** Округлить до 2 знаков после запятой */
    private double round2(double value) {
        return BigDecimal.valueOf(value)
                .setScale(2, RoundingMode.HALF_UP)
                .doubleValue();
    }
    public MeditationStatisticsDto getStatistics(String authHeader) {
        String token = authHeader.replace("Bearer ", "");
        String email = JwtParserUtil.getSubjectFromToken(token, secreteString);
        OurUsers user = userRepo.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        List<MeditationHistory> all = historyRepo.findAllByUser(user);

        // 1) сумма всех секунд → часы
        double totalHours = all.stream()
                .mapToDouble(e -> e.getPosition() / 3600.0)
                .sum();
        totalHours = round2(totalHours);

        // 2) сколько завершённых сессий
        long totalMeditations = all.stream()
                .filter(MeditationHistory::getFinished)
                .count();

        // 3) часы по категориям
        Map<Integer, Double> byCat = all.stream()
                .collect(Collectors.groupingBy(
                        MeditationHistory::getCategoryId,
                        Collectors.summingDouble(e -> e.getPosition() / 3600.0)
                ));

        List<CategoryHoursDto> cats = byCat.entrySet().stream()
                .map(e -> new CategoryHoursDto(
                        e.getKey(),
                        round2(e.getValue())
                ))
                .sorted(Comparator.comparing(CategoryHoursDto::getCategoryId))
                .collect(Collectors.toList());

        return new MeditationStatisticsDto(totalHours, totalMeditations, cats);
    }

    public MeditationAiSuggestionDto getAiSuggestion(
            String authHeader, LocalDate startDate, LocalDate endDate
    ) {
        String email = JwtParserUtil.getSubjectFromToken(authHeader, secreteString);
        OurUsers user = userRepo.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        // 1) вытащить всю историю между startDate и endDate
        LocalDateTime from = startDate.atStartOfDay();
        LocalDateTime to   = endDate.plusDays(1).atStartOfDay().minusNanos(1);
        List<MeditationHistory> hist = historyRepo
                .findAllByUserAndLastPlayedAtBetween(user, from, to);

        // 2) составить текст для AI

        String system = """
            Вы — дружественный ассистент по медитациям.
            По истории прослушиваний пользователя сформируйте:
            1) категорию рекомендаций (целое число);
            2) список из 2–3 meditationId, которые стоит послушать далее;
            3) краткое обобщение рекомендаций на русском (summaryTextRu);
            4) то же обобщение на казахском (summaryTextKk).
            Верните строго JSON-объект вида:
            {
              "categoryId": int,
              "suggestions": [{"meditationId": int}, ...],
              "summaryTextRu": "...",
              "summaryTextKk": "..."
            }
            """;

        StringBuilder sb = new StringBuilder("История за период:\n");
        for (MeditationHistory e : hist) {
            sb.append("- cat=").append(e.getCategoryId())
                    .append(", medId=").append(e.getMeditationId())
                    .append(", lastPlayedAt=").append(e.getLastPlayedAt())
                    .append("\n");
        }

        // 3) запрос к OpenAI
        var req = new kz.mental.AiService.dto.ChatCompletionRequest();
        req.setModel("gpt-4o-mini");
        req.setMessages(List.of(
                new kz.mental.AiService.dto.Message("system", system),
                new kz.mental.AiService.dto.Message("user", sb.toString())
        ));
        var resp = openAiClient.createChatCompletion(req);
        String content = resp.getChoices().get(0).getMessage().getContent().trim();

        // 4) вырезать JSON (если в ```json)
        if (content.startsWith("```")) {
            content = content.replaceAll("(?s)```.*?\\n(\\{.*?\\})\\n```.*", "$1");
        }

        // 5) распарсить
        MeditationAiSuggestionDto result;
        try {
            result = mapper.readValue(
                    content,
                    new TypeReference<MeditationAiSuggestionDto>() {}
            );
        } catch (Exception ex) {
            throw new RuntimeException("Не удалось распарсить ответ AI:\n" + content, ex);
        }

        return result;
    }
}
