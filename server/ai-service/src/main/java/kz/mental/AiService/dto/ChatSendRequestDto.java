package kz.mental.AiService.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Setter
@Getter
public class ChatSendRequestDto {
    // Геттеры и сеттеры
    private UUID chatId;    // Уникальный идентификатор "чата" (topic)
    private String message; // Сообщение пользователя
    private String language;


}
