package kz.mental.AiService.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class JournalDayRecordDto {
    private String id;
    private String time;         // HH:mm
    private Integer emotionId;
    private String title;
    private String entry;
    private Integer stressLevel;
    private String createdAt;    // ISO-8601
    private Integer aiCategory;
}
