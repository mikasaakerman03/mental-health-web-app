// kz.mental.AiService.repository.DailyGoalRepository.java
package kz.mental.AiService.repository;

import kz.mental.AiService.entity.DailyGoal;
import kz.mental.AiService.entity.OurUsers;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface DailyGoalRepository extends JpaRepository<DailyGoal, Long> {
    List<DailyGoal> findByUserAndDate(OurUsers user, LocalDate date);
    Optional<DailyGoal> findByUserAndDateAndGoalType(OurUsers user, LocalDate date, String goalType);
}
