package kz.mental.AiService.repository;

import kz.mental.AiService.entity.SleepEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface SleepEntryRepository extends JpaRepository<SleepEntry, UUID> {
    List<SleepEntry> findByUserEmailAndStartTimeBetween(
            String email,
            LocalDateTime start,
            LocalDateTime end
    );
    Optional<SleepEntry> findByIdAndUserEmail(UUID id, String email);
    List<SleepEntry> findByUserEmailAndEndTimeBetween(
            String email,
            LocalDateTime start,
            LocalDateTime end
    );
}
