package kz.mental.AiService.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;
import java.time.LocalDate;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "journal_summaries",
        uniqueConstraints = @UniqueConstraint(columnNames = {"user_id", "date"}))
public class JournalSummary {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private OurUsers user;

    @Column(nullable = false)
    private LocalDate date;

    /** Обзор на русском */
    @Column(name = "summary_ru", columnDefinition = "TEXT", nullable = false)
    private String summaryRu;

    /** Обзор на казахском */
    @Column(name = "summary_kk", columnDefinition = "TEXT", nullable = false)
    private String summaryKk;

    /** Сколько записей было на момент генерации */
    @Column(nullable = false)
    private int entryCount;

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private Instant generatedAt;
}
