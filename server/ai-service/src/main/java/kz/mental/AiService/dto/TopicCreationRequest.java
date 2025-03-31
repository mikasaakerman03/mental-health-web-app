package kz.mental.AiService.dto;

import lombok.Data;

@Data
public class TopicCreationRequest {
    private String titleRu;
    private String titleKk;
    private Long categoryId;
}
