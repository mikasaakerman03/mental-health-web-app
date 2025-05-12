package kz.mental.AiService.dto;

import lombok.*;

import java.time.Instant;
import java.time.LocalDate;

@Data
@AllArgsConstructor
public class JournalSummaryDto {
    private LocalDate date;
    private String summaryRu;
    private String summaryKk;
    private Instant generatedAt;
}

