package kz.mental.AiService.config;

import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import org.springframework.boot.autoconfigure.jackson.Jackson2ObjectMapperBuilderCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.Instant;

@Configuration
public class JacksonConfig {

    @Bean
    public Jackson2ObjectMapperBuilderCustomizer jacksonCustomizer() {
        return builder -> {
            // Заменяем стандартный сериализатор Instant на наш
            builder.serializerByType(Instant.class, new CustomInstantSerializer());
            // Опционально — установить общую зону (для других дат/времен)
            builder.timeZone("Asia/Almaty");
        };
    }

}
