package kz.mental.AiService.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import kz.mental.AiService.client.OpenAiClient;
import kz.mental.AiService.dto.ChatCompletionRequest;
import kz.mental.AiService.dto.ChatCompletionResponse;
import kz.mental.AiService.dto.JournalSummaryDto;
import kz.mental.AiService.dto.Message;
import kz.mental.AiService.entity.*;
import kz.mental.AiService.repository.*;

import kz.mental.AiService.utils.JwtParserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.*;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class JournalSummaryService {
    private final JournalRecordRepository recordRepo;
    private final JournalSummaryRepository summaryRepo;
    private final OurUserRepo usersRepo;
    private final OpenAiClient openAiClient;
    @Value("${spring.jwt.security}")
    private String secreteString;
    private final ObjectMapper mapper;

    public JournalSummaryDto getDailySummary(String authHeader, LocalDate date) {
        // 1. вытащить email из токена, найти юзера
        String email = JwtParserUtil.getSubjectFromToken(authHeader, secreteString);
        OurUsers user = usersRepo.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("User not found: " + email));

        // 2. границы дня
        Instant start = date.atStartOfDay(ZoneOffset.UTC).toInstant();
        Instant end   = date.plusDays(1).atStartOfDay(ZoneOffset.UTC).toInstant();

        // 3. сколько записей
        int count = recordRepo.countByUserAndCreatedAtBetween(user, start, end);

        // 4. если есть уже сгенерированная и entryCount совпадает — вернуть её
        JournalSummary s = summaryRepo.findByUserAndDate(user, date)
                .filter(x -> x.getEntryCount() == count)
                .orElseGet(() -> regenerate(user, date, start, end, count));

        return new JournalSummaryDto(
                s.getDate(),
                s.getSummaryRu(),
                s.getSummaryKk(),
                s.getGeneratedAt()
        );
    }

    private JournalSummary regenerate(OurUsers user,
                                      LocalDate date,
                                      Instant start,
                                      Instant end,
                                      int count) {
        List<String> texts = recordRepo.findAllByUserAndCreatedAtBetween(user, start, end)
                .stream().map(JournalRecord::getEntry)
                .collect(Collectors.toList());

        String system = """
            Вы — дружелюбный ассистент. По списку дневниковых записей \
                составьте связный обзор: выделите основные мысли, эмоции и дайте рекомендации.\
            пользователя за день составьте связный обзор на **двух** языках:
            если список дневниковых записей пусто но написать нужно нет на сегодня записи \
            1) на русском (summaryRu)
            2) на казахском (summaryKk)
            Ответьте строго в формате JSON:
            {
              "summaryRu": "...",
              "summaryKk": "..."
            }
            """;

        String userMsg = "Записи за " + date + ":\n\n" + String.join("\n\n", texts);

        ChatCompletionRequest req = new ChatCompletionRequest();
        req.setModel("gpt-4o-mini");
        req.setMessages(List.of(
                new Message("system", system),
                new Message("user",   userMsg)
        ));

        ChatCompletionResponse resp = openAiClient.createChatCompletion(req);
        String raw = resp.getChoices().get(0).getMessage().getContent();

        // вырезаем JSON-объект с двумя полями
        String json = extractJsonObject(raw);

        // парсим
        Map<String,String> map;
        try {
            map = mapper.readValue(json, new TypeReference<>() {});
        } catch (Exception e) {
            throw new RuntimeException("Не удалось распарсить JSON:\n" + raw, e);
        }

        // сохраняем оба текста
        JournalSummary s = summaryRepo.findByUserAndDate(user, date)
                .orElseGet(JournalSummary::new);
        s.setUser(user);
        s.setDate(date);
        s.setEntryCount(count);
        s.setSummaryRu(map.get("summaryRu"));
        s.setSummaryKk(map.get("summaryKk"));
        // generatedAt проставится автоматически
        return summaryRepo.save(s);
    }
    private String extractJsonObject(String raw) {
        Matcher m = Pattern.compile("(?s)```json\\s*(\\{.*?\\})\\s*```").matcher(raw);
        if (m.find()) {
            return m.group(1);
        }
        String noMd = raw.replaceAll("```.*?```", "").trim();
        int i1 = noMd.indexOf('{'), i2 = noMd.lastIndexOf('}');
        if (i1 >= 0 && i2 > i1) {
            return noMd.substring(i1, i2 + 1);
        }
        return noMd;
    }
}
