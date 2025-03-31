package kz.mental.AiService.dto;


import lombok.Getter;
import lombok.Setter;

import java.time.Instant;
import java.util.UUID;

@Getter
@Setter
public class ChatSendResponseDto {
    private UUID messageId;   // Уникальный ID сообщения ассистента
    private UUID chatId;      // Совпадает с переданным chatId
    private String response;  // Текст ответа от GPT
    private Instant timestamp; // Время создания сообщения
}

