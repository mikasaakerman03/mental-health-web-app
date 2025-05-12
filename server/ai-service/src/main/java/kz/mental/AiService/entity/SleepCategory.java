package kz.mental.AiService.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "sleep_categories")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SleepCategory {
    @Id
    private Integer id;              // 0, 1 или 2
    @Column(nullable = false, unique = true)
    private String code;             // "NORMAL", "CORE", "INSOMNIAC"
    @Column(nullable = false)
    private String name;             // например, "Нормальный", "Основной", "Бессонница"
    @Column(columnDefinition = "TEXT")
    private String description;      // подробное описание категории
}
