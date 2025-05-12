package kz.mental.AiService.controller;


import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import kz.mental.AiService.dto.*;
import kz.mental.AiService.entity.ChatHistory;
import kz.mental.AiService.entity.ChatbotCategory;
import kz.mental.AiService.entity.Topic;
import kz.mental.AiService.service.*;
import kz.mental.AiService.utils.JwtParserUtil;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.UUID;

@Slf4j
@RestController
@AllArgsConstructor
@RequestMapping("api/v1/chat")
public class ChatController {
    private final JournalService journalService;
    private final ChatService chatService;
    private final ChatbotCategoryService service;
    private final TopicService topicService;
    private final ProfileService profileService;
    private final SleepService sleepService;
    private final JournalSummaryService summaryService;
    private final MeditationHistoryService meditationHistoryService;
    private final GoalService goalService;

    @GetMapping("/categories")
    public List<CategoryWithCountDto> getAllCategories(@RequestHeader("Authorization") String authHeader) {
        // Извлекаем email пользователя из токена
        // Возвращаем список категорий с подсчитанным количеством топиков для данного email
        return service.getAllCategories(authHeader);
    }

    @GetMapping("/{id}/topics")
    public List<Topic> getTopicsByCategory(
            @PathVariable("id") Long categoryId,
            @RequestHeader("Authorization") String authHeader
    ) {
        // Извлекаем subject (например, email) из токена; если токен недействителен — выбросится исключение
        // Если нужно, можно добавить проверку прав пользователя по subject

        return topicService.getTopicsByCategoryAndOwner(categoryId,authHeader);
    }
    /**
     * Endpoint для отправки сообщения.
     * Принимает JSON с userId и текстом сообщения,
     * возвращает ответ от OpenAI.
     */
    @PostMapping("/send")
    public ResponseEntity<ChatSendResponseDto> sendMessage(@RequestBody ChatSendRequestDto requestDto, @RequestHeader("Authorization") String authHeader) {
        ChatSendResponseDto responseDto = chatService.processMessage(requestDto, authHeader);
        return ResponseEntity.ok(responseDto);
    }

    @GetMapping("/topic/{uuid}")
    public List<ChatHistory> getChatHistoryByTopic(
            @PathVariable("uuid") UUID topicId,
            @RequestHeader("Authorization") String authHeader
    ) {
        // 1. Извлекаем email (или другой идентификатор) из токена

        // 2. Получаем историю только для этого пользователя и указанной темы
        return chatService.getHistoryByTopicForUser(topicId, authHeader);
    }

    @PostMapping("/topic")
    public ResponseEntity<Topic> createTopic(@RequestBody TopicCreationRequest request,@RequestHeader("Authorization") String authHeader) {
        Topic createdTopic = topicService.createTopic(request,authHeader);
        return ResponseEntity.ok(createdTopic);
    }
    @PutMapping("/topic/{uuid}/title")
    public ResponseEntity<Topic> updateTopicTitle(
            @PathVariable("uuid") UUID topicId,
            @RequestBody TopicUpdateTitleRequest request
    ) {
        Topic updatedTopic = topicService.updateTopicTitle(topicId, request);
        return ResponseEntity.ok(updatedTopic);
    }

    @PutMapping("/topic/{uuid}")
    public ResponseEntity<Topic> updateTopic(
            @PathVariable("uuid") UUID uuid,
            @RequestBody UpdateTopicRequest request
    ) {
        // Вызываем метод сервиса, который выполнит все действия
        Topic updatedTopic = topicService.updateTopic(uuid, request);

        // Возвращаем обновлённый объект
        return ResponseEntity.ok(updatedTopic);
    }

    @DeleteMapping("/topic/{uuid}")
    public ResponseEntity<Void> deleteTopic(@PathVariable("uuid") UUID topicId) {
        topicService.deleteTopicById(topicId);
        // Возвращаем статус 204 (No Content)
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/user")
    public ResponseEntity<ProfileResponse> getUserProfile(@RequestHeader("Authorization") String authHeader) {
        ProfileResponse response = profileService.getUserProfile(authHeader);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/user/edit")
    public ResponseEntity<ProfileResponse> updateUserProfile(
            @RequestHeader("Authorization") String authHeader,
            @RequestBody ProfileUpdateRequest request
    ) {
        ProfileResponse updatedProfile = profileService.updateUserProfile(authHeader, request);
        return ResponseEntity.ok(updatedProfile);
    }

    @Operation(summary = "Создать запись в журнале")
    @PostMapping("/journal/create-record")
    public ResponseEntity<JournalCreateResponseDto> create(
            @RequestHeader("Authorization") String authHeader,
            @Valid @RequestBody JournalCreateRequestDto dto
    ) {
        var resp = journalService.createRecord(authHeader,dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(resp);
    }



    @Operation(summary = "Получить записи за день")
    @GetMapping("/journal")
    public ResponseEntity<List<JournalDayRecordDto>> byDate(
            @RequestParam("date")
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate date
    ) {
        var list = journalService.getRecordsForDate(date);
        if (list.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok(list);
    }

    @GetMapping("/journal/ai-record-suggestion")
    public ResponseEntity<AiRecordSuggestionDto> getAiRecordSuggestion(
            @RequestParam("recordId") Integer recordId,
            @RequestHeader("Authorization") String authHeader
    ) {
        // можно по authHeader извлечь userId/email
        AiRecordSuggestionDto dto = journalService.getAiRecordSuggestion(recordId);
        return ResponseEntity.ok(dto);
    }
    @Operation(summary = "Годовая статистика журнала")
    @GetMapping("/journal/yearly-statistics")
    public ResponseEntity<?> getYearlyStatistics(
            @RequestHeader("Authorization") String authHeader,
            @RequestParam("year")  int year,
            @RequestParam("month") int month
    ) {
        try {
            YearlyStatisticsResponse resp =
                    journalService.getYearlyStatistics(authHeader, year, month);
            return ResponseEntity.ok(resp);

        } catch (IllegalArgumentException ex) {
            // 400 Bad Request
            return ResponseEntity
                    .badRequest()
                    .body(Collections.singletonMap("error", ex.getMessage()));

        } catch (Exception ex) {
            // 500 Internal Server Error
            return ResponseEntity
                    .status(500)
                    .body(Collections.singletonMap("error", "Server error"));
        }
    }

    @PostMapping("/sleep/sleep-entry")
    public ResponseEntity<SleepEntryResponseDto> createSleepEntry(
            @RequestHeader("Authorization") String authHeader,
            @Valid @RequestBody SleepEntryRequestDto dto
    ) {
        SleepEntryResponseDto resp = sleepService.createEntry(authHeader,dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(resp);
    }

    @GetMapping("/sleep/average-start-time")
    public ResponseEntity<AverageTimeResponseDto> getAverageStartTime(
            @RequestHeader("Authorization") String authHeader) {
        AverageTimeResponseDto dto = sleepService.getAverageStartTime(authHeader);
        return ResponseEntity.ok(dto);
    }

    @GetMapping("/sleep/average-end-time")
    public ResponseEntity<AverageTimeResponseDto> getAverageEndTime(
            @RequestHeader("Authorization") String authHeader) {
        AverageTimeResponseDto dto = sleepService.getAverageEndTime(authHeader);
        return ResponseEntity.ok(dto);
    }

    @GetMapping("/sleep/today-duration")
    public ResponseEntity<TodayDurationResponseDto> getTodayDuration(
            @RequestHeader("Authorization") String authHeader) {
        TodayDurationResponseDto dto = sleepService.getTodayDuration(authHeader);
        return ResponseEntity.ok(dto);
    }

    @GetMapping("/sleep/average-weekly-duration")
    public ResponseEntity<AverageWeeklyDurationResponseDto> getAverageWeeklyDuration(
            @RequestHeader("Authorization") String authHeader) {
        AverageWeeklyDurationResponseDto dto = sleepService.getAverageWeeklyDuration(authHeader);
        return ResponseEntity.ok(dto);
    }

    @GetMapping("/sleep/weekly-history")
    public ResponseEntity<WeeklyHistoryResponseDto> getWeeklyHistory(
            @RequestHeader("Authorization") String authHeader,
            @RequestParam("startDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam("endDate")   @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate
    ) {
        WeeklyHistoryResponseDto dto = sleepService.getWeeklyHistory(authHeader, startDate, endDate);
        return ResponseEntity.ok(dto);
    }

    // в kz.mental.AiService.controller.ChatController (или SleepController)
    @Operation(summary = "Получить AI-рекомендации для сна")
    @GetMapping("/sleep/ai-sleep-suggestion")
    public ResponseEntity<SleepAiSuggestionResponseDto> getAiSleepSuggestion(
            @RequestParam("recordId") String recordId,
            @RequestHeader("Authorization") String authHeader
    ) {
        var dto = sleepService.getAiSleepSuggestion(recordId, authHeader);
        return ResponseEntity.ok(dto);
    }
    @Operation(summary = "Получить AI-сводку записей за день (для текущего пользователя)")
    @GetMapping("/journal/summary")
    public ResponseEntity<JournalSummaryDto> getSummary(
            @RequestHeader("Authorization") String authHeader,
            @RequestParam("date")
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate date
    ) {
        JournalSummaryDto dto = summaryService.getDailySummary(authHeader, date);
        return ResponseEntity.ok(dto);
    }
    @Operation(summary = "Получить все категории сна")
    @GetMapping("/sleep/categories")
    public ResponseEntity<List<SleepCategoryDto>> getAllCategories() {
        List<SleepCategoryDto> categories = sleepService.getAllCategories();
        return ResponseEntity.ok(categories);
    }

    @PostMapping("/meditation/meditation-history")
    public ResponseEntity<MessageResponseDto> saveProgress(
            @RequestHeader("Authorization") String authHeader,
            @RequestBody MeditationHistoryRequestDto dto
    ) {
        meditationHistoryService.saveOrUpdate(authHeader, dto);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(new MessageResponseDto("Progress saved successfully"));
    }
    @GetMapping("/meditation/meditation-history")
    public ResponseEntity<Page<MeditationHistoryResponseDto>> getHistory(
            @RequestHeader("Authorization") String authHeader,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        // по умолчанию сортируем по updatedAt (или createdAt) в порядке убывания
        var pageable = PageRequest.of(page, size, Sort.by("updatedAt").descending());
        Page<MeditationHistoryResponseDto> result = meditationHistoryService.getHistory(authHeader, pageable);
        return ResponseEntity.ok(result);
    }
    @GetMapping("/meditation/meditation-statistics")
    public ResponseEntity<MeditationStatisticsDto> stats(
            @RequestHeader("Authorization") String auth) {
        return ResponseEntity.ok(meditationHistoryService.getStatistics(auth));
    }
    @GetMapping("/meditation/meditation-ai-suggestion")
    public ResponseEntity<MeditationAiSuggestionDto> getAiSuggestion(
            @RequestHeader("Authorization") String auth,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate
    ) {
        MeditationAiSuggestionDto dto = meditationHistoryService.getAiSuggestion(auth, startDate, endDate);
        return ResponseEntity.ok(dto);
    }
    @GetMapping("/goals/daily")
    public ResponseEntity<GoalsResponseDto> getDailyGoals(
            @RequestHeader("Authorization") String authHeader,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date
    ) {
        return ResponseEntity.ok(goalService.getDailyGoals(authHeader, date));
    }

    @PostMapping("/goals/create")
    public ResponseEntity<Void> createGoal(
            @RequestHeader("Authorization") String authHeader,
            @RequestBody CreateGoalRequestDto dto
    ) {
        goalService.createGoal(authHeader, dto);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping("/goals/update")
    public ResponseEntity<Void> updateGoal(
            @RequestHeader("Authorization") String authHeader,
            @RequestBody UpdateGoalRequestDto dto
    ) {
        goalService.updateGoal(authHeader, dto);
        return ResponseEntity.ok().build();
    }
}
