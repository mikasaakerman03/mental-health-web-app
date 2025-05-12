// kz.mental.AiService.dto.UpdateGoalRequestDto.java
package kz.mental.AiService.dto;

public record UpdateGoalRequestDto(
        String goalType,
        Double newGoalValue,
        Boolean done
) {}
