// kz.mental.AiService.entity.DailyGoal.java
package kz.mental.AiService.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
@Entity
@Table(name = "daily_goals",
        uniqueConstraints = @UniqueConstraint(columnNames = {"user_id", "date", "goalType"}))
@Data
@NoArgsConstructor
@AllArgsConstructor
public class DailyGoal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private OurUsers user;

    @Column(nullable = false)
    private LocalDate date;

    @Column(nullable = false)
    private String goalType;

    @Column(nullable = false)
    private Double goalValue;

    @Column(nullable = false)
    private Boolean done = false;      // <— новоe поле
}
