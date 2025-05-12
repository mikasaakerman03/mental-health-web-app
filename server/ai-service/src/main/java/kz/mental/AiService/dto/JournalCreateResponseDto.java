package kz.mental.AiService.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class JournalCreateResponseDto {
    private String id;
    private String title;
    private String entry;
    private Integer stressLevel;
    private Integer emotionId;
    private String stressor;

    private String createdAt;    // ISO-8601
    private Integer aiCategory;  // 0|1|2
}
