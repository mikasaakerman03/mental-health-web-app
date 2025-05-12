package kz.mental.AiService.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "sleep_entries")
public class SleepEntry {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(updatable = false, nullable = false)
    private UUID id;

    @Column(nullable = false)
    private LocalDateTime startTime;

    @Column(nullable = false)
    private LocalDateTime endTime;

    /** Дата (день) сна, для удобства агрегации */
    @Column(nullable = false)
    private LocalDate date;

    /** Когда эта запись была создана в системе */
    @Column(nullable = false, updatable = false)
    private Instant createdAt;

    /** Продолжительность в часах (дробное число, напр. 7.5) */
    @Column(nullable = false)
    private double durationHours;

    /**
     * Категория сна:
     * 0 — Normal (7–9ч),
     * 1 — Core   (3–6ч),
     * 2 — Insomniac (1–2ч)
     */
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "category_id", nullable = false)
    private SleepCategory category;


    @PrePersist
    public void prePersist() {
        this.createdAt = Instant.now();
    }
    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "user_id", nullable = true)
    private OurUsers user;
}
