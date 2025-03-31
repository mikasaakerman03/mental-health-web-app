package kz.mental.AiService.repository;

import kz.mental.AiService.entity.ChatbotCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChatbotCategoryRepository extends JpaRepository<ChatbotCategory, Long> {
}
