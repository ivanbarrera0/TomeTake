package com.example.demo.dto;

import com.example.demo.entities.Auth;
import com.example.demo.entities.User;

public class RegisterUserDto {

    private User user;
    private Auth auth;

    public RegisterUserDto() {
    }

    public RegisterUserDto(User user, Auth auth) {
        this.user = user;
        this.auth = auth;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Auth getAuth() {
        return auth;
    }

    public void setAuth(Auth auth) {
        this.auth = auth;
    }
}
