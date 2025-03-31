package kz.mental.AiService.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "chatbot_categories")
public class ChatbotCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title_ru", nullable = false)
    private String titleRu;

    @Column(name = "title_kk", nullable = false)
    private String titleKk;

    @Column(name = "category_count")
    private Integer count;


}
