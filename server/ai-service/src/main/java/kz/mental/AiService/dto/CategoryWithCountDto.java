package kz.mental.AiService.dto;

import lombok.Data;

@Data
public class CategoryWithCountDto {
    private Long id;
    private String titleRu;
    private String titleKk;
    private long count;
}
