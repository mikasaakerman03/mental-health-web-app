// kz.mental.AiService.dto.MeditationAiSuggestionDto.java
package kz.mental.AiService.dto;

import java.util.List;

public record MeditationAiSuggestionDto(
        int categoryId,
        List<SuggestionDto> suggestions,
        String summaryTextRu,
        String summaryTextKk
) {}
