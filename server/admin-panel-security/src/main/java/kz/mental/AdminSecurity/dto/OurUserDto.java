package kz.mental.AdminSecurity.dto;


import lombok.Value;

@Value
public class OurUserDto {
    Integer id;
    String email;
    String name;
    String role;
}
