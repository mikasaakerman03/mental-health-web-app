package kz.mental.AiService.config;

import feign.RequestInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FeignConfig {
    @Bean
    public RequestInterceptor requestInterceptor() {
        return requestTemplate -> {
                        requestTemplate.header("Authorization", "Bearer " + token);
            requestTemplate.header("Content-Type", "application/json");
        };
    }
}
