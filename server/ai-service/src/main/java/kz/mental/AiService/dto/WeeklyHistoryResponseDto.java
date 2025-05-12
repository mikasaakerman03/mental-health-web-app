package kz.mental.AiService.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class WeeklyHistoryResponseDto {
    private List<DailySleepDto> days;
}
