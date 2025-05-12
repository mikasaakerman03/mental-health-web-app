package kz.mental.AiService.repository;

import kz.mental.AiService.entity.JournalRecord;
import kz.mental.AiService.entity.OurUsers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Repository
public interface JournalRecordRepository extends JpaRepository<JournalRecord, UUID> {
    List<JournalRecord> findAllByCreatedAtBetween(Instant start, Instant end);
    // метод по имени найдёт записи по полю user.email и по промежутку createdAt
    List<JournalRecord> findAllByUserEmailAndCreatedAtBetween(
            String userEmail,
            Instant start,
            Instant end
    );
    int countByUserAndCreatedAtBetween(OurUsers user, Instant start, Instant end);
    List<JournalRecord> findAllByUserAndCreatedAtBetween(OurUsers user, Instant start, Instant end);


    List<JournalRecord> findAllByCreatedAtBetweenOrderByCreatedAtDesc(Instant start, Instant end);

}
