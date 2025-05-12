package kz.mental.AiService.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class AverageWeeklyDurationResponseDto {
    private double averageSleepHours;
    private int sleepCategory;
}
