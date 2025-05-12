package kz.mental.AiService.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class MeditationHistoryRequestDto {
    private Integer categoryId;
    private Integer meditationId;
    private Integer position;
    private Boolean finished;
    private LocalDateTime lastPlayedAt;
}
