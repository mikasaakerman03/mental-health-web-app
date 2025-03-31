package kz.mental.AiService.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "ourusers")
public class OurUsers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String email;

    // Полное имя
    private String name;

    private String password;
    private String deviceToken;
    private String role;

    // Новые поля:
    private LocalDate birthDate;
    private String gender;
    private String address;
    private Double weight;
    private Double height;
}
