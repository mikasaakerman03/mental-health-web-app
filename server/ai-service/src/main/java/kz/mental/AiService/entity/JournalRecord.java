package kz.mental.AiService.entity;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import jakarta.persistence.*;
import kz.mental.AiService.config.CustomInstantSerializer;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;

import java.time.Instant;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "journal_records")
public class JournalRecord {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;

    @Column(length = 100, nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String entry;

    @Column(nullable = false)
    private Integer stressLevel;

    @Column(nullable = false)
    private Integer emotionId;

    @Column(length = 200, nullable = false)
    private String stressor;

    /** Сохраняет метку времени в UTC в базе, но при сериализации отформатирует в Asia/Almaty */
    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    @JsonSerialize(using = CustomInstantSerializer.class)
    private Instant createdAt;

    /**
     * 0 - нет метки,
     * 1 - позитивная,
     * 2 - негативная
     */
    @Column(nullable = false)
    private Integer aiCategory;

    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "user_id", nullable = true)
    private OurUsers user;

    @PrePersist
    public void prePersist() {
        this.createdAt = Instant.now();
    }
}
