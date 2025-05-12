package kz.mental.AiService.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.List;

@Data
@AllArgsConstructor
public class AiRecordSuggestionDto {
    private Integer id;
    private Integer amount;
    private List<RecommendationDto> recommendations;

    @Data
    @AllArgsConstructor
    public static class RecommendationDto {
        private Integer id;
        private String title;
        private String description;
    }
}
