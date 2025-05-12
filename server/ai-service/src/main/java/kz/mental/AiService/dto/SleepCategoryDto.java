// 2) DTO для ответа
package kz.mental.AiService.dto;

public record SleepCategoryDto(
        Integer id,
        String code,
        String name,
        String description
) {}
