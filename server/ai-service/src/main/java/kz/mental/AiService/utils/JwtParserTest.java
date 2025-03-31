package kz.mental.AiService.utils;

public class JwtParserTest {
    public static void main(String[] args) {
        String token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYW5hQGVtYWlsLmNvbSIsImlhdCI6MTc0MzIyNjAzOCwiZXhwIjoxNzQzMjI2Mzk4fQ.PpqoabUHYwK1nhQbswuE2vu260keZeXHjQv6fh1BnsI";
        String secret = "843567893696976453275974432697R634976R738467TR678T34865R6834R8763T478378637664538745673865783678548735687R3"; // замените на ваш ключ
        String subject = JwtParserUtil.getSubjectFromToken(token, secret);
        System.out.println("Subject: " + subject);
    }
}

