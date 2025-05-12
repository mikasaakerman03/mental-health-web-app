package kz.mental.AiService.dto;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class DayStatusDto {
    private int day;
    private int aiCategory;
}
