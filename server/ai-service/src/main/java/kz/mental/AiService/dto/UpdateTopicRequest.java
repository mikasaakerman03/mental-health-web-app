package kz.mental.AiService.dto;

import lombok.Data;

import java.util.UUID;

@Data
public class UpdateTopicRequest {
    private UUID chatId;
    private Long categoryId;
}
