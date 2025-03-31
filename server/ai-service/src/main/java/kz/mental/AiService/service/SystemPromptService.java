package kz.mental.AiService.service;

import kz.mental.AiService.entity.SystemPrompt;
import kz.mental.AiService.repository.SystemPromptRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SystemPromptService {

    private final SystemPromptRepository repository;

    public SystemPromptService(SystemPromptRepository repository) {
        this.repository = repository;
    }

    public List<SystemPrompt> getAllPrompts() {
        return repository.findAll();
    }

    public Optional<SystemPrompt> getPromptById(Long id) {
        return repository.findById(id);
    }

    public SystemPrompt createPrompt(SystemPrompt prompt) {
        return repository.save(prompt);
    }

    public SystemPrompt updatePrompt(Long id, SystemPrompt prompt) {
        return repository.findById(id).map(existing -> {
            existing.setType(prompt.getType());
            existing.setPrompt(prompt.getPrompt());
            return repository.save(existing);
        }).orElseThrow(() -> new RuntimeException("Запись SystemPrompt не найдена с id: " + id));
    }

    public void deletePrompt(Long id) {
        repository.deleteById(id);
    }
}
