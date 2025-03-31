package kz.mental.AiService.repository;

import kz.mental.AiService.entity.SystemPrompt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SystemPromptRepository extends JpaRepository<SystemPrompt, Long> {
    Optional<SystemPrompt> findByType(String type);
}
