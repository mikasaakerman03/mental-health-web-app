// kz.mental.AiService.entity.DailyGoal.java
package kz.mental.AiService.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "daily_goals",
        uniqueConstraints = @UniqueConstraint(columnNames = {"user_id", "date", "goal_type"}))
@Data
@NoArgsConstructor
@AllArgsConstructor
public class DailyGoal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // связь на пользователя
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private OurUsers user;

    @Column(nullable = false)
    private LocalDate date;

    @Column(name = "goal_type", nullable = false, length = 50)
    private String goalType;

    @Column(nullable = false)
    private Double goalValue;
}
