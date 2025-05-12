// kz.mental.AiService.service.GoalService.java
package kz.mental.AiService.service;

import kz.mental.AiService.dto.*;
import kz.mental.AiService.entity.DailyGoal;
import kz.mental.AiService.entity.OurUsers;
import kz.mental.AiService.repository.DailyGoalRepository;
import kz.mental.AiService.repository.OurUserRepo;
import kz.mental.AiService.utils.JwtParserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class GoalService {
    private final DailyGoalRepository goalRepo;
    private final OurUserRepo userRepo;
    @Value("${spring.jwt.security}")
    private String secret;

    public GoalsResponseDto getDailyGoals(String authHeader, LocalDate date) {
        String token = authHeader.replace("Bearer ", "");
        String email = JwtParserUtil.getSubjectFromToken(token, secret);
        OurUsers user = userRepo.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("User not found: " + email));

        List<DailyGoal> goals = goalRepo.findByUserAndDate(user, date);

        // TODO: подставить реальные currentValue из сервисов sleep/journal/meditation/chatbot
        return new GoalsResponseDto(
                goals.stream()
                        .map(g -> new GoalDto(
                                g.getGoalType(),
                                g.getGoalValue(),
                                g.getDone()      // <-- здесь нужно дернуть другие сервисы и посчитать текущее значение
                        ))
                        .collect(Collectors.toList())
        );
    }

    @Transactional
    public void createGoal(String authHeader, CreateGoalRequestDto dto) {
        String token = authHeader.replace("Bearer ", "");
        String email = JwtParserUtil.getSubjectFromToken(token, secret);
        OurUsers user = userRepo.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("User not found: " + email));

        // если уже есть — перезаписываем:
        DailyGoal goal = goalRepo.findByUserAndDateAndGoalType(user, dto.date(), dto.goalType())
                .orElse(new DailyGoal());
        goal.setUser(user);
        goal.setDate(dto.date());
        goal.setGoalType(dto.goalType());
        goal.setGoalValue(dto.goalValue());

        goalRepo.save(goal);
    }

    @Transactional
    public void updateGoal(String authHeader, UpdateGoalRequestDto dto) {
        String token = authHeader.replace("Bearer ", "");
        String email = JwtParserUtil.getSubjectFromToken(token, secret);
        OurUsers user = userRepo.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("User not found: " + email));

        LocalDate today = LocalDate.now();
        DailyGoal goal = goalRepo.findByUserAndDateAndGoalType(user, today, dto.goalType())
                .orElseThrow(() -> new IllegalArgumentException("Goal not found for today: " + dto.goalType()));

        goal.setGoalValue(dto.newGoalValue());
        goal.setDone(dto.done());
        goalRepo.save(goal);
    }
}
