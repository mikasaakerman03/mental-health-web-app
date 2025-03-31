package kz.mental.AiService.dto;


import lombok.Getter;
import lombok.Setter;

// DTO для сообщения
@Setter
@Getter
public class Message {
    private String role;
    private String content;

    public Message() {
    }

    public Message(String role, String content) {
        this.role = role;
        this.content = content;
    }

}
