package kz.mental.AiService.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class AverageTimeResponseDto {
    private String averageTime;  // HH:mm
    private int sleepCategory;
}
