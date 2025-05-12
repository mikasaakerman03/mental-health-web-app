package kz.mental.AiService.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter @AllArgsConstructor
public class DayStatus{
    private int day;
    private String status; // "skipped", "positive", "negative"
}
