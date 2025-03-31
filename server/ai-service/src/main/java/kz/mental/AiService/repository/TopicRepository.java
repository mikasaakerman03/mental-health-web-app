package kz.mental.AiService.repository;

import kz.mental.AiService.entity.Topic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface TopicRepository extends JpaRepository<Topic, UUID> {
    List<Topic> findAllByCategory_IdAndOwnerEmail(Long categoryId, String ownerEmail);
    long countByCategory_IdAndOwnerEmail(Long categoryId, String ownerEmail);


    List<Topic> findAllByCategory_Id(Long categoryId);
}
