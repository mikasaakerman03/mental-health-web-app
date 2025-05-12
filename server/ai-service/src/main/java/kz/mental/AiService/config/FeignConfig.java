package kz.mental.AiService.config;

import feign.RequestInterceptor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FeignConfig {
    @Value("${ai.url}")
    private String token;
    @Bean
    public RequestInterceptor requestInterceptor() {
        return requestTemplate -> {
//            String token = ""; // Получите токен из конфигурации или переменной окружения
            requestTemplate.header("Authorization", "Bearer " + token);
            requestTemplate.header("Content-Type", "application/json");
        };
    }
}
