package kz.mental.AiService.repository;

import kz.mental.AiService.entity.JournalSummary;
import kz.mental.AiService.entity.OurUsers;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.Optional;

public interface JournalSummaryRepository extends JpaRepository<JournalSummary, Long> {
    Optional<JournalSummary> findByUserAndDate(OurUsers user, LocalDate date);
}
