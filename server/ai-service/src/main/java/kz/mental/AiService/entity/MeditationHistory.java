package kz.mental.AiService.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(
        name = "meditation_history",
        uniqueConstraints = @UniqueConstraint(columnNames = {
                "user_id", "category_id", "meditation_id"
        })
)
public class MeditationHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private OurUsers user;

    @Column(name = "category_id", nullable = false)
    private Integer categoryId;

    @Column(name = "meditation_id", nullable = false)
    private Integer meditationId;

    /** позиция в секундах */
    @Column(nullable = false)
    private Integer position;

    /** закончена ли медитация */
    @Column(nullable = false)
    private Boolean finished;

    /** время последнего запуска */
    @Column(name = "last_played_at", nullable = false)
    private LocalDateTime lastPlayedAt;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
