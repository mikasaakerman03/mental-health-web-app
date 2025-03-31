package kz.mental.AiService.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
import java.util.UUID;

@Data
@Entity
@Table(name = "chatbot_topics")
public class Topic {

    @Id
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;

    @Column(name = "title_ru", nullable = false)
    private String titleRu;

    @Column(name = "title_kk", nullable = false)
    private String titleKk;

    // Поле для хранения email владельца темы
    @Column(name = "owner_email")
    private String ownerEmail;

    @JsonIgnore
    @OneToMany(mappedBy = "topic", cascade = CascadeType.REMOVE, orphanRemoval = true)
    private List<ChatHistory> chatHistories;    @ManyToOne

    @JoinColumn(name = "category_id")
    private ChatbotCategory category;

}
