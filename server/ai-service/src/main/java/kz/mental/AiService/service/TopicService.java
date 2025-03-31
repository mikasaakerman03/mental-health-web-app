package kz.mental.AiService.service;

import kz.mental.AiService.dto.TopicCreationRequest;
import kz.mental.AiService.dto.TopicUpdateTitleRequest;
import kz.mental.AiService.dto.UpdateTopicRequest;
import kz.mental.AiService.entity.ChatbotCategory;
import kz.mental.AiService.entity.Topic;
import kz.mental.AiService.repository.ChatbotCategoryRepository;
import kz.mental.AiService.repository.TopicRepository;
import kz.mental.AiService.utils.JwtParserUtil;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class TopicService {

    private final TopicRepository topicRepository;
    private final ChatbotCategoryRepository categoryRepository;
    @Value("${spring.jwt.security}") // base64-encoded secret
    private String secretBase64;

    public List<Topic> getTopicsByCategoryAndOwner(Long categoryId, String authHeader) {
        String email = JwtParserUtil.getSubjectFromToken(authHeader, secretBase64);

        return topicRepository.findAllByCategory_IdAndOwnerEmail(categoryId, email);
    }

    public Topic updateTopic(UUID topicId, UpdateTopicRequest request) {
        // 1. Проверяем, что topicId и request.getChatId() совпадают (по желанию)
        if (request.getChatId() != null && !request.getChatId().equals(topicId)) {
            throw new IllegalArgumentException("Path variable uuid != chatId in request body");
        }

        // 2. Ищем Topic
        Topic topic = topicRepository.findById(topicId)
                .orElseThrow(() -> new RuntimeException("Topic not found with id = " + topicId));

        // 3. Ищем категорию
        ChatbotCategory category = categoryRepository.findById(request.getCategoryId())
                .orElseThrow(() -> new RuntimeException("Category not found with id = " + request.getCategoryId()));

        // 4. Обновляем категорию у топика
        topic.setCategory(category);

        // при необходимости можно обновлять и другие поля, например:
        // topic.setTitleRu(request.getTitleRu());
        // topic.setTitleKk(request.getTitleKk());

        // 5. Сохраняем
        return topicRepository.save(topic);
    }

    public void deleteTopicById(UUID topicId) {
        Topic topic = topicRepository.findById(topicId)
                .orElseThrow(() -> new RuntimeException("Тема не найдена: " + topicId));
        topicRepository.delete(topic);
    }
    /**
     * Создает новую тему на основе данных из TopicCreationRequest.
     *
     * @param request DTO с данными темы (titleRu, titleKk и опционально categoryId)
     * @return Сохраненная тема
     */
    public Topic createTopic(TopicCreationRequest request,String authHeader) {
        String email = JwtParserUtil.getSubjectFromToken(authHeader, secretBase64);

        Topic topic = new Topic();
        // Генерируем новый UUID для темы
        topic.setId(UUID.randomUUID());
        topic.setTitleRu(request.getTitleRu());
        topic.setTitleKk(request.getTitleKk());
        topic.setOwnerEmail(email);
        // Если указан categoryId, пытаемся найти категорию и установить связь
        if (request.getCategoryId() != null) {
            ChatbotCategory category = categoryRepository.findById(request.getCategoryId())
                    .orElseThrow(() -> new RuntimeException("Категория не найдена с id: " + request.getCategoryId()));
            topic.setCategory(category);
        }
        return topicRepository.save(topic);
    }
    public Topic updateTopicTitle(UUID topicId, TopicUpdateTitleRequest request) {
        Topic topic = topicRepository.findById(topicId)
                .orElseThrow(() -> new RuntimeException("Тема не найдена: " + topicId));
        // Обновляем название, если новые значения не null
        if (request.getTitleRu() != null) {
            topic.setTitleRu(request.getTitleRu());
        }
        if (request.getTitleKk() != null) {
            topic.setTitleKk(request.getTitleKk());
        }
        return topicRepository.save(topic);
    }
}
