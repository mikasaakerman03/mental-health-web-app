package kz.mental.AiService.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class DailySleepDto {
    private int day;             // номер дня месяца
    private double durationHours;
    private int sleepCategory;
}
