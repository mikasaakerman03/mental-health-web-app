package kz.mental.AiService.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter @Setter
@AllArgsConstructor
public class SleepAiSuggestionResponseDto {
    private String id;
    private int amount;
    private List<SleepRecommendationDto> recommendations;
}
