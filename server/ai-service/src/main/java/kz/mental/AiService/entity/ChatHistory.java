package kz.mental.AiService.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Entity
@Table(name = "chat_history")
public class ChatHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "message_uuid", unique = true, nullable = false)
    private UUID messageUuid;
    // Связь с пользователем (сущность OurUsers)
    @ManyToOne
    @JoinColumn(name = "user_id")
    private OurUsers user;

    // Роль сообщения (user/assistant)
    private String role;

    // Текст сообщения
    @Column(columnDefinition = "TEXT")
    private String content;

    // Время создания сообщения
    private LocalDateTime timestamp;

    // Новое поле: связь с таблицей тем (Topic)
    @ManyToOne
    @JoinColumn(name = "topic_id")
    private Topic topic;  // <-- Сущность Topic, где поле id типа UUID
}
