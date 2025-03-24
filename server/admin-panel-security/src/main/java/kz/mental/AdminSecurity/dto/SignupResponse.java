package kz.mental.AdminSecurity.dto;

import kz.mental.AdminSecurity.entity.OurUsers;
import lombok.Data;

@Data
public class SignupResponse {
    private Integer statusCode;
    private String message;
    private OurUsers ourUsers;
    private String error;

}
