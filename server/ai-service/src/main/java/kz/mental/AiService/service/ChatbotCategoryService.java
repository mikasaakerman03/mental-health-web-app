package kz.mental.AiService.service;


import kz.mental.AiService.dto.CategoryWithCountDto;
import kz.mental.AiService.entity.ChatbotCategory;
import kz.mental.AiService.repository.ChatbotCategoryRepository;
import kz.mental.AiService.repository.TopicRepository;
import kz.mental.AiService.utils.JwtParserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ChatbotCategoryService {

    private final ChatbotCategoryRepository repository;
    @Value("${spring.jwt.security}") // base64-encoded secret
    private String secretBase64;
    private final TopicRepository topicRepository;


    public List<CategoryWithCountDto> getAllCategories(String authHeader) {
        String email = JwtParserUtil.getSubjectFromToken(authHeader, secretBase64);
        List<ChatbotCategory> categories = repository.findAll();
        List<CategoryWithCountDto> dtos = new ArrayList<>();

        for (ChatbotCategory cat : categories) {
            long count = topicRepository.countByCategory_IdAndOwnerEmail(cat.getId(), email);
            CategoryWithCountDto dto = new CategoryWithCountDto();
            dto.setId(cat.getId());
            dto.setTitleRu(cat.getTitleRu());
            dto.setTitleKk(cat.getTitleKk());
            dto.setCount(count);
            dtos.add(dto);
        }
        return dtos;
    }
    public List<ChatbotCategory> getAllCategories() {
        return repository.findAll();
    }
}
