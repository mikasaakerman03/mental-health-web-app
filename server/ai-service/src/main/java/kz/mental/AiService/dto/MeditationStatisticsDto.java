package kz.mental.AiService.dto;

import lombok.*;

import java.util.List;

@Data
@AllArgsConstructor
public class MeditationStatisticsDto {
    private double totalHours;
    private long totalMeditations;
    private List<CategoryHoursDto> categories;
}
