// kz.mental.AiService.dto.GoalsResponseDto.java
package kz.mental.AiService.dto;

import java.util.List;

public record GoalsResponseDto(
        List<GoalDto> goals
) {}
