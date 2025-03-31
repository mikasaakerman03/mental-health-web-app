package kz.mental.AiService.client;

import kz.mental.AiService.config.FeignConfig;
import kz.mental.AiService.dto.ChatCompletionRequest;
import kz.mental.AiService.dto.ChatCompletionResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "openAiClient", url = "https://api.openai.com", configuration = FeignConfig.class)
public interface OpenAiClient {

    @PostMapping("/v1/chat/completions")
    ChatCompletionResponse createChatCompletion(@RequestBody ChatCompletionRequest request);
}
