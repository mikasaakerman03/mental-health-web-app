//package kz.mental.AiService.service;
//// kz.mental.AiService.service.AiRecommendationJob.java
//
//import kz.mental.AiService.dto.*;
//import kz.mental.AiService.entity.AiSuggestion;
//import kz.mental.AiService.entity.JournalRecord;
//import kz.mental.AiService.entity.SystemPrompt;
//import kz.mental.AiService.repository.AiSuggestionRepository;
//import kz.mental.AiService.repository.JournalRecordRepository;
//import kz.mental.AiService.repository.SystemPromptRepository;
//import kz.mental.AiService.client.OpenAiClient;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.scheduling.annotation.Scheduled;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class AiRecommendationJob {
//
//    private final JournalRecordRepository journalRepo;
//    private final AiSuggestionRepository suggestionRepo;
//    private final SystemPromptRepository promptRepo;
//    private final OpenAiClient openAiClient;
//
//    // Тип системного промпта, под который вы сохранили его в базе
//    @Value("${chat.system.prompt.type:AI_JOB}")
//    private String promptType;
//
//    public AiRecommendationJob(JournalRecordRepository journalRepo,
//                               AiSuggestionRepository suggestionRepo,
//                               SystemPromptRepository promptRepo,
//                               OpenAiClient openAiClient) {
//        this.journalRepo = journalRepo;
//        this.suggestionRepo = suggestionRepo;
//        this.promptRepo = promptRepo;
//        this.openAiClient = openAiClient;
//    }
//
//    /**
//     * Каждые 10 минут.
//     */
//    @Scheduled(fixedRate = 10 * 60 * 1000)
//    public void generateRecommendations() {
//        // 1) Загрузить системный текст
//        String systemText = promptRepo.findByType(promptType)
//                .map(SystemPrompt::getPrompt)
//                .orElse("Ты — эксперт по ментальному здоровью. Дай рекомендации…");
//
//        // 2) Найти все записи без aiCategory (то есть ещё не обработанные)
//        List<JournalRecord> toProcess = journalRepo.findByAiCategoryIsNull();
//        for (JournalRecord record : toProcess) {
//            try {
//                // 3) Сформировать запрос к OpenAI
//                ChatCompletionRequest openAiReq = new ChatCompletionRequest();
//                openAiReq.setModel("gpt-4o-mini");
//                openAiReq.setMessages(List.of(
//                        new Message("system", systemText),
//                        new Message("user", "Дайте рекомендации для этой записи: " + record.getEntry())
//                ));
//
//                // 4) Отправить
//                ChatCompletionResponse openAiResp = openAiClient.createChatCompletion(openAiReq);
//
//                // 5) Распарсить первый вариант ответа
//                String content = openAiResp.getChoices()
//                        .get(0)
//                        .getMessage()
//                        .getContent()
//                        .trim();
//
//                // Предположим, что GPT вернул JSON-массив рекомендаций:
//                // [{"title":"…","description":"…"}, …]
//                // Разберите его любым JSON-парсером (Jackson/Gson)
//                List<AiRecommendationDto> recs = JsonUtils.fromJson(
//                        content,
//                        new TypeReference<>() {}
//                );
//
//                // 6) Сохранить рекомендации и пометить запись как обработанную
//                for (AiRecommendationDto r : recs) {
//                    AiSuggestion sug = new AiSuggestion();
//                    sug.setRecord(record);
//                    sug.setTitle(r.getTitle());
//                    sug.setDescription(r.getDescription());
//                    suggestionRepo.save(sug);
//                }
//                // например, 1 = «есть рекомендации»
//                record.setAiCategory(1);
//                journalRepo.save(record);
//
//            } catch (Exception ex) {
//                // логируем и пропускаем, чтобы не остановить весь цикл
//                log.error("Ошибка при генериции рекомендаций для записи {}: {}", record.getId(), ex.getMessage());
//            }
//        }
//    }
//}
