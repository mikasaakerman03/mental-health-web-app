package kz.mental.AiService.repository;

import kz.mental.AiService.entity.MeditationHistory;
import kz.mental.AiService.entity.OurUsers;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface MeditationHistoryRepository extends JpaRepository<MeditationHistory, Long> {
    Optional<MeditationHistory> findByUserAndCategoryIdAndMeditationId(
            OurUsers user, Integer categoryId, Integer meditationId
    );
    Page<MeditationHistory> findAllByUser(OurUsers user, Pageable pageable);
    List<MeditationHistory> findAllByUser(OurUsers user);
    List<MeditationHistory> findAllByUserAndLastPlayedAtBetween(
            OurUsers user, LocalDateTime from, LocalDateTime to
    );
}
