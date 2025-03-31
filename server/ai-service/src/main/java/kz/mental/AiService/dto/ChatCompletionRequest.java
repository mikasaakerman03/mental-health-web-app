package kz.mental.AiService.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class ChatCompletionRequest {
    private String model;
    private List<Message> messages;

    public ChatCompletionRequest() {
    }

    public ChatCompletionRequest(String model, List<Message> messages) {
        this.model = model;
        this.messages = messages;
    }

}
