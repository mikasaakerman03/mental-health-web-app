package kz.mental.AiService.dto;

import kz.mental.AiService.entity.OurUsers;
import lombok.Data;

@Data
public class SignupResponse {
    private Integer statusCode;
    private String message;
    private OurUsers ourUsers;
    private String error;

}
