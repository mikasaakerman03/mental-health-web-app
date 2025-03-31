package kz.postkz.Gateway.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Base64;
import java.util.Date;
@Component
public class JwtService {

    private final Key signKey;

    public JwtService(@Value("${spring.jwt.security}") String secretString) {
        byte[] keyBytes = Base64.getDecoder().decode(secretString.getBytes(StandardCharsets.UTF_8));
        this.signKey = new SecretKeySpec(keyBytes, "HmacSHA256");
    }

    public boolean CheckToken(final String token) {
        try {
            Jwts.parserBuilder().setSigningKey(signKey).build().parseClaimsJws(token);
            return true;
        } catch (JwtException e) {
            return false;
        }
    }

    public Claims getAllClaimsFromToken(String token) {
        return Jwts.parserBuilder().setSigningKey(signKey).build().parseClaimsJws(token).getBody();
    }

    public boolean isTokenValid(String token) {
        try {
            return this.getAllClaimsFromToken(token).getExpiration().after(new Date());
        } catch (Exception e) {
            return false;
        }
    }
}

