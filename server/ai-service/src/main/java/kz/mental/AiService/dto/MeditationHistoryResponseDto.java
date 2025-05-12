package kz.mental.AiService.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class MeditationHistoryResponseDto {
    private Integer categoryId;
    private Integer meditationId;
    private Integer position;
    private Boolean finished;
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime lastPlayedAt;
}
