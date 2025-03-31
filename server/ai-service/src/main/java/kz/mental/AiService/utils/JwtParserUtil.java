package kz.mental.AiService.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import java.security.Key;
import java.time.LocalDate;
import java.time.Period;
import java.util.Base64;

public class JwtParserUtil {

    /**
     * Парсит JWT-токен, переданный в заголовке Authorization, и возвращает значение поля "sub" (subject).
     *
     * @param authHeader Заголовок Authorization, например "Bearer eyJhbGciOiJIUzI1NiJ9..."
     * @param secret     Секретная строка, которая должна быть такой же, как используется при генерации токена.
     * @return Значение поля "sub", если токен валиден.
     * @throws RuntimeException если токен невалиден или произошла ошибка парсинга.
     */
    public static String getSubjectFromToken(String authHeader, String secret) {
        try {
            String token = authHeader;
            if (authHeader != null && authHeader.startsWith("Bearer ")) {
                token = authHeader.substring(7).trim();
            }
            token = token.replaceAll("\\s+", "");

            // Декодируем секретную строку так же, как в JWTUtils
            byte[] keyBytes = Base64.getDecoder().decode(secret);
            Key key = Keys.hmacShaKeyFor(keyBytes);

            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
            return claims.getSubject();
        } catch (Exception e) {
            throw new RuntimeException("Ошибка при парсинге JWT: " + e.getMessage(), e);
        }
    }

    public static int calculateAge(LocalDate birthDate) {
        if (birthDate == null) {
            return 0;
        }
        return Period.between(birthDate, LocalDate.now()).getYears();
    }
}
