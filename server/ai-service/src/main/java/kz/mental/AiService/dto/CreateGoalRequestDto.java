// kz.mental.AiService.dto.CreateGoalRequestDto.java
package kz.mental.AiService.dto;

import java.time.LocalDate;

public record CreateGoalRequestDto(
        LocalDate date,
        String goalType,
        Double goalValue
) {}
