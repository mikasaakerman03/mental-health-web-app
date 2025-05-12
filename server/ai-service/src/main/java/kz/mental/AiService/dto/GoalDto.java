// kz.mental.AiService.dto.GoalDto.java
package kz.mental.AiService.dto;

public record GoalDto(
        String goalType,
        Double goalValue,
        Boolean done
) {}
