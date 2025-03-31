package kz.mental.AiService.controller;


import kz.mental.AiService.dto.*;
import kz.mental.AiService.entity.ChatHistory;
import kz.mental.AiService.entity.ChatbotCategory;
import kz.mental.AiService.entity.Topic;
import kz.mental.AiService.service.ChatService;
import kz.mental.AiService.service.ChatbotCategoryService;
import kz.mental.AiService.service.ProfileService;
import kz.mental.AiService.service.TopicService;
import kz.mental.AiService.utils.JwtParserUtil;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@Slf4j
@RestController
@AllArgsConstructor
@RequestMapping("api/v1/chat")
public class ChatController {

    private final ChatService chatService;
    private final ChatbotCategoryService service;
    private final TopicService topicService;
    private final ProfileService profileService;

    @GetMapping("/categories")
    public List<CategoryWithCountDto> getAllCategories(@RequestHeader("Authorization") String authHeader) {
        // Извлекаем email пользователя из токена
        // Возвращаем список категорий с подсчитанным количеством топиков для данного email
        return service.getAllCategories(authHeader);
    }

    @GetMapping("/{id}/topics")
    public List<Topic> getTopicsByCategory(
            @PathVariable("id") Long categoryId,
            @RequestHeader("Authorization") String authHeader
    ) {
        // Извлекаем subject (например, email) из токена; если токен недействителен — выбросится исключение
        // Если нужно, можно добавить проверку прав пользователя по subject

        return topicService.getTopicsByCategoryAndOwner(categoryId,authHeader);
    }
    /**
     * Endpoint для отправки сообщения.
     * Принимает JSON с userId и текстом сообщения,
     * возвращает ответ от OpenAI.
     */
    @PostMapping("/send")
    public ResponseEntity<ChatSendResponseDto> sendMessage(@RequestBody ChatSendRequestDto requestDto, @RequestHeader("Authorization") String authHeader) {
        ChatSendResponseDto responseDto = chatService.processMessage(requestDto, authHeader);
        return ResponseEntity.ok(responseDto);
    }

    @GetMapping("/topic/{uuid}")
    public List<ChatHistory> getChatHistoryByTopic(
            @PathVariable("uuid") UUID topicId,
            @RequestHeader("Authorization") String authHeader
    ) {
        // 1. Извлекаем email (или другой идентификатор) из токена

        // 2. Получаем историю только для этого пользователя и указанной темы
        return chatService.getHistoryByTopicForUser(topicId, authHeader);
    }

    @PostMapping("/topic")
    public ResponseEntity<Topic> createTopic(@RequestBody TopicCreationRequest request,@RequestHeader("Authorization") String authHeader) {
        Topic createdTopic = topicService.createTopic(request,authHeader);
        return ResponseEntity.ok(createdTopic);
    }
    @PutMapping("/topic/{uuid}/title")
    public ResponseEntity<Topic> updateTopicTitle(
            @PathVariable("uuid") UUID topicId,
            @RequestBody TopicUpdateTitleRequest request
    ) {
        Topic updatedTopic = topicService.updateTopicTitle(topicId, request);
        return ResponseEntity.ok(updatedTopic);
    }

    @PutMapping("/topic/{uuid}")
    public ResponseEntity<Topic> updateTopic(
            @PathVariable("uuid") UUID uuid,
            @RequestBody UpdateTopicRequest request
    ) {
        // Вызываем метод сервиса, который выполнит все действия
        Topic updatedTopic = topicService.updateTopic(uuid, request);

        // Возвращаем обновлённый объект
        return ResponseEntity.ok(updatedTopic);
    }

    @DeleteMapping("/topic/{uuid}")
    public ResponseEntity<Void> deleteTopic(@PathVariable("uuid") UUID topicId) {
        topicService.deleteTopicById(topicId);
        // Возвращаем статус 204 (No Content)
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/user")
    public ResponseEntity<ProfileResponse> getUserProfile(@RequestHeader("Authorization") String authHeader) {
        ProfileResponse response = profileService.getUserProfile(authHeader);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/user/edit")
    public ResponseEntity<ProfileResponse> updateUserProfile(
            @RequestHeader("Authorization") String authHeader,
            @RequestBody ProfileUpdateRequest request
    ) {
        ProfileResponse updatedProfile = profileService.updateUserProfile(authHeader, request);
        return ResponseEntity.ok(updatedProfile);
    }
}
