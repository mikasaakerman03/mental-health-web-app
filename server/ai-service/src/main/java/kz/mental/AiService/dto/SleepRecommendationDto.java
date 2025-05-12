package kz.mental.AiService.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
public class SleepRecommendationDto {
    private int id;
    private String titleRu;
    private String titleKk;
    private String descriptionRu;
    private String descriptionKk;

}
