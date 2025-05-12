package kz.mental.AiService.repository;

import kz.mental.AiService.entity.ChatHistory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ChatHistoryRepository extends JpaRepository<ChatHistory, Long> {
    List<ChatHistory> findByUserId(Integer userId);

    List<ChatHistory> findByUser_Id(Integer userId);

    List<ChatHistory> findAllByTopic_Id(UUID topicId);

    ChatHistory findByMessageUuid(UUID messageUuid);

    List<ChatHistory> findAllByTopic_IdAndUser_Id(UUID topicId, Integer userId);


}
