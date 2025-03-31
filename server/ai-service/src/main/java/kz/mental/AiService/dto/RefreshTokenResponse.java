package kz.mental.AiService.dto;

import lombok.Data;

@Data
public class RefreshTokenResponse {
    private int statusCode;
    private String message;
    private String accessToken;
    private String refreshToken;
    private String expirationTime;
}
