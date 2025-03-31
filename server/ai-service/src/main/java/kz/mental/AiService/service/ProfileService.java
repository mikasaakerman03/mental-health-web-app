package kz.mental.AiService.service;

import kz.mental.AiService.dto.ProfileResponse;
import kz.mental.AiService.dto.ProfileUpdateRequest;
import kz.mental.AiService.entity.OurUsers;
import kz.mental.AiService.repository.OurUserRepo;
import kz.mental.AiService.utils.JwtParserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeParseException;

@Service
@RequiredArgsConstructor
public class ProfileService {

    private final OurUserRepo ourUsersRepository;
    @Value("${spring.jwt.security}") // base64-encoded secret
    private String secretBase64;

    public ProfileResponse getUserProfile(String authHeader) {
        // 1. Извлекаем email (или другой идентификатор) из токена
        String email = JwtParserUtil.getSubjectFromToken(authHeader, secretBase64);

        // 2. Находим пользователя в БД
        OurUsers user = ourUsersRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Пользователь не найден по email: " + email));

        // 3. Формируем DTO
        ProfileResponse response = new ProfileResponse();
        response.setFullName(user.getName());

        // birthDate -> "2007-03-28"
        if (user.getBirthDate() != null) {
            response.setBirthDate(user.getBirthDate().toString());
            // или кастомный формат:
            // String dateStr = user.getBirthDate().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
            // response.setBirthDate(dateStr);
        }
        // Вычисляем возраст
        response.setAge(JwtParserUtil.calculateAge(user.getBirthDate()));

        response.setGender(user.getGender());
        response.setAddress(user.getAddress());
        response.setWeight(user.getWeight());
        response.setHeight(user.getHeight());

        return response;
    }

    public ProfileResponse updateUserProfile(String authHeader, ProfileUpdateRequest request) {
        // 1. Извлекаем email из токена
        String email = JwtParserUtil.getSubjectFromToken(authHeader, secretBase64);

        // 2. Находим пользователя в БД
        OurUsers user = ourUsersRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Пользователь не найден: " + email));

        // 3. Обновляем поля
        if (request.getFullName() != null) {
            user.setName(request.getFullName());
        }
        if (request.getBirthDate() != null) {
            try {
                LocalDate date = LocalDate.parse(request.getBirthDate()); // формат "yyyy-MM-dd"
                user.setBirthDate(date);
            } catch (DateTimeParseException e) {
                throw new RuntimeException("Неверный формат даты: " + request.getBirthDate());
            }
        }
        if (request.getGender() != null) {
            user.setGender(request.getGender());
        }
        if (request.getAddress() != null) {
            user.setAddress(request.getAddress());
        }
        if (request.getWeight() != null) {
            user.setWeight(request.getWeight());
        }
        if (request.getHeight() != null) {
            user.setHeight(request.getHeight());
        }

        // Сохраняем изменения
        ourUsersRepository.save(user);

        // 4. Формируем и возвращаем обновлённый профиль
        return convertToProfileResponse(user);
    }

    private ProfileResponse convertToProfileResponse(OurUsers user) {
        ProfileResponse response = new ProfileResponse();
        response.setFullName(user.getName());
        if (user.getBirthDate() != null) {
            response.setBirthDate(user.getBirthDate().toString());
        }
        response.setAge(JwtParserUtil.calculateAge(user.getBirthDate()));
        response.setGender(user.getGender());
        response.setAddress(user.getAddress());
        response.setWeight(user.getWeight());
        response.setHeight(user.getHeight());
        return response;
    }
}
