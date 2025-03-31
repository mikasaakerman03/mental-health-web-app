//package kz.mental.AiService.controller;
//
//import kz.mental.AiService.entity.SystemPrompt;
//import kz.mental.AiService.service.SystemPromptService;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/v1/system-prompts")
//public class SystemPromptController {
//
//    private final SystemPromptService systemPromptService;
//
//    public SystemPromptController(SystemPromptService systemPromptService) {
//        this.systemPromptService = systemPromptService;
//    }
//
//    @GetMapping
//    public ResponseEntity<List<SystemPrompt>> getAllPrompts() {
//        List<SystemPrompt> prompts = systemPromptService.getAllPrompts();
//        return ResponseEntity.ok(prompts);
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<SystemPrompt> getPromptById(@PathVariable Long id) {
//        return systemPromptService.getPromptById(id)
//                .map(ResponseEntity::ok)
//                .orElse(ResponseEntity.notFound().build());
//    }
//
//    @PostMapping
//    public ResponseEntity<SystemPrompt> createPrompt(@RequestBody SystemPrompt prompt) {
//        SystemPrompt created = systemPromptService.createPrompt(prompt);
//        return ResponseEntity.ok(created);
//    }
//
//    @PutMapping("/{id}")
//    public ResponseEntity<SystemPrompt> updatePrompt(@PathVariable Long id, @RequestBody SystemPrompt prompt) {
//        try {
//            SystemPrompt updated = systemPromptService.updatePrompt(id, prompt);
//            return ResponseEntity.ok(updated);
//        } catch (RuntimeException e) {
//            return ResponseEntity.notFound().build();
//        }
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deletePrompt(@PathVariable Long id) {
//        systemPromptService.deletePrompt(id);
//        return ResponseEntity.noContent().build();
//    }
//}
