package kz.mental.AiService.dto;

import lombok.Data;

@Data
public class ProfileResponse {
    private String fullName;
    private String birthDate; // формат YYYY-MM-DD
    private Integer age;
    private String gender;
    private String address;
    private Double weight;
    private Double height;
}
