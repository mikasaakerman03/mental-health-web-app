package kz.mental.AiService.dto;

import jakarta.validation.constraints.*;

import lombok.Data;

@Data
public class JournalCreateRequestDto {

    @NotBlank @Size(max = 100)
    private String title;

    @NotBlank
    private String entry;

    @NotNull @Min(1) @Max(5)
    private Integer stressLevel;

    @NotNull @Min(1) @Max(5)
    private Integer emotionId;

    @Size(max = 200)
    private String stressor;
}
