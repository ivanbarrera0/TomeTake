package com.example.demo.controller;

import com.example.demo.dto.RegisterUserDto;
import com.example.demo.entities.User;
import com.example.demo.exception.DuplicateUsernameException;
import com.example.demo.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class AuthController {

    private AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping(path = "/register/auth")
    public User registerNewUser(@RequestBody RegisterUserDto registerUserDto) throws DuplicateUsernameException {
        return authService.registerUser(registerUserDto);
    }

    @ExceptionHandler(DuplicateUsernameException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public String exceptionHandler(DuplicateUsernameException e) {
        return e.getMessage();
    }
}
