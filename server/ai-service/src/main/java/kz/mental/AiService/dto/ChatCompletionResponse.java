package kz.mental.AiService.dto;


import lombok.Getter;
import lombok.Setter;

import java.util.List;

// DTO для ответа
@Setter
@Getter
public class ChatCompletionResponse {
    private String id;
    private String object;
    private int created;
    private List<Choice> choices;
    private Usage usage;

    public ChatCompletionResponse() {
    }

}
