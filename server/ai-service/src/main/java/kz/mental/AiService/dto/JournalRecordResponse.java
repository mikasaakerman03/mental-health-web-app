package kz.mental.AiService.dto;


import lombok.*;

import java.time.Instant;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JournalRecordResponse {
    private UUID id;
    private String title;
    private String entry;
    private Integer stressLevel;
    private Integer emotionId;
    private String stressor;
    private Instant createdAt;
    private Integer aiCategory;
}
