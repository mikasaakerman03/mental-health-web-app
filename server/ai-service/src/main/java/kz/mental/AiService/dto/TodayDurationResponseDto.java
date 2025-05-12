package kz.mental.AiService.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class TodayDurationResponseDto {
    private double hoursSleptToday;
    private int sleepCategory;
}
