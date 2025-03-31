package kz.mental.AiService.service;

import kz.mental.AiService.client.OpenAiClient;
import kz.mental.AiService.dto.*;
import kz.mental.AiService.entity.*;
import kz.mental.AiService.repository.*;
import kz.mental.AiService.utils.JwtParserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service

@RequiredArgsConstructor
public class ChatService {

    private final ChatHistoryRepository chatHistoryRepository;
    private final OurUserRepo ourUsersRepository;
    private final OpenAiClient openAiClient;
    private final SystemPromptRepository systemPromptRepository;
    private final ChatbotCategoryRepository chatbotCategoryRepository;
    private final TopicRepository topicRepository;
    @Value("${spring.jwt.security}")
    private String secreteString;

    /**
     * Обработка сообщения пользователя:
     * - сохраняем сообщение пользователя
     * - формируем запрос с системным сообщением и сообщением пользователя
     * - отправляем запрос в OpenAI
     * - сохраняем ответ модели
     * - возвращаем ответ модели
     */
    public ChatSendResponseDto processMessage(ChatSendRequestDto requestDto, String authentication) {
        // 1. Ищем Topic по chatId
        UUID chatId = requestDto.getChatId();
        Topic topic = topicRepository.findById(chatId)
                .orElseGet(() -> {
                    ChatbotCategory chatbotCategory = chatbotCategoryRepository.findById(5L).orElseThrow(() -> new RuntimeException("Категория не найдена"));
                    // Создаём новый топик с указанным UUID
                    Topic newTopic = new Topic();
                    newTopic.setId(chatId);    // UUID, который передали в запросе
                    newTopic.setTitleRu("Новый чат");   // Можно установить какие-то поля по умолчанию
                    newTopic.setTitleKk("Жаңа чат");
                    newTopic.setCategory(chatbotCategory);// Или взять из запроса, если нужно
                    return topicRepository.save(newTopic);
                });
        String subject = JwtParserUtil.getSubjectFromToken(authentication, secreteString);
        OurUsers user = ourUsersRepository.findByEmail(subject).orElseThrow(() -> new RuntimeException("Пользователь не найден"));
        // 2. Сохраняем сообщение пользователя
        ChatHistory userChat = new ChatHistory();
        userChat.setMessageUuid(UUID.randomUUID()); // генерируем уникальный UUID для записи
        userChat.setRole("user");
        userChat.setContent(requestDto.getMessage());
        userChat.setTimestamp(LocalDateTime.now());
        userChat.setTopic(topic);
        userChat.setUser(user);  // Из токена получаем id пользователя
        chatHistoryRepository.save(userChat);

        // 3. Получаем системный prompt по языку (или используем дефолт)
        String language = requestDto.getLanguage();
        String systemText = systemPromptRepository.findByType(language)
                .map(SystemPrompt::getPrompt)
                .orElse("Ты опытный психолог ... (текст по умолчанию)");

        // 4. Формируем запрос к OpenAI
        ChatCompletionRequest openAiRequest = new ChatCompletionRequest();
        openAiRequest.setModel("gpt-4o-mini");
        openAiRequest.setMessages(List.of(
                new Message("system", systemText),
                new Message("user", requestDto.getMessage())
        ));

        ChatCompletionResponse openAiResponse = openAiClient.createChatCompletion(openAiRequest);

        // 5. Сохраняем сообщение ассистента
        String assistantText = null;
        if (openAiResponse != null && openAiResponse.getChoices() != null && !openAiResponse.getChoices().isEmpty()) {
            assistantText = openAiResponse.getChoices().getFirst().getMessage().getContent();

            ChatHistory assistantChat = new ChatHistory();
            assistantChat.setMessageUuid(UUID.randomUUID()); // уникальный UUID для ответа ассистента
            assistantChat.setRole("assistant");
            assistantChat.setContent(assistantText);
            assistantChat.setTimestamp(LocalDateTime.now());
            assistantChat.setTopic(topic);
            assistantChat.setUser(user);  // из токена получаем id пользователя
            chatHistoryRepository.save(assistantChat);

            // Формируем ответ
            ChatSendResponseDto responseDto = new ChatSendResponseDto();
            responseDto.setMessageId(assistantChat.getMessageUuid()); // UUID ассистента
            responseDto.setChatId(chatId); // тот же chatId
            responseDto.setResponse(assistantText);
            responseDto.setTimestamp(Instant.now()); // или assistantChat.getTimestamp().toInstant(ZoneOffset.UTC)

            return responseDto;
        }

        // Если от OpenAI ничего не пришло, вернём что-то по умолчанию
        ChatSendResponseDto emptyResponse = new ChatSendResponseDto();
        emptyResponse.setMessageId(UUID.randomUUID());
        emptyResponse.setChatId(chatId);
        emptyResponse.setResponse("Извините, я не смог понять ваш запрос.");
        emptyResponse.setTimestamp(Instant.now());

        return emptyResponse;
    }

    public List<ChatHistory> getHistoryByTopicForUser(UUID topicId, String authHeader) {
        String email = JwtParserUtil.getSubjectFromToken(authHeader, secreteString);

        // 1. Находим пользователя
        OurUsers user = ourUsersRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Пользователь не найден по email: " + email));

        // 2. Ищем историю, связанную с topicId и userId
        return chatHistoryRepository.findAllByTopic_IdAndUser_Id(topicId, user.getId());
    }
}
