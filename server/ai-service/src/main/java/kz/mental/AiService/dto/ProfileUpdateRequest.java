package kz.mental.AiService.dto;

import lombok.Data;

@Data
public class ProfileUpdateRequest {
    private String fullName;   // новое имя пользователя
    private String birthDate;  // "2007-03-28"
    private String gender;     // "female" / "male" и т.д.
    private String address;    // например, "г. Алматы"
    private Double weight;     // 48
    private Double height;     // 162
    // Поле age можно либо игнорировать, либо вычислять из birthDate
    private Integer age;       // 17 (по желанию)
}
