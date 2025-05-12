package kz.mental.AiService.dto;

import kz.mental.AiService.entity.SleepCategory;
import lombok.*;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class SleepEntryResponseDto {
    private String id;
    private String startTime;      // "HH:mm"
    private String endTime;        // "HH:mm"
    private String date;           // "YYYY-MM-DD"
    private String createdAt;      // ISO-8601
    private double durationHours;
    private SleepCategory sleepCategory;
}
