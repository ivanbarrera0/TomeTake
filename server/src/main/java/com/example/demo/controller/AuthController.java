package com.example.demo.controller;

import com.example.demo.dto.RegisterUserDto;
import com.example.demo.entities.Auth;
import com.example.demo.entities.User;
import com.example.demo.exception.*;
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
    public User registerNewUser(@RequestBody RegisterUserDto registerUserDto) throws DuplicateUsernameException, InvalidUsernameException, InvalidEmailException, InvalidPasswordException {
        return authService.registerUser(registerUserDto);
    }

    @PostMapping(path = "/login/auth")
    public User loginUser(@RequestBody Auth auth) throws AccessDeniedException, UserNotFoundException, InvalidUsernameException, InvalidPasswordException {
        return authService.findUserByUsername(auth.getUsername(), auth.getPassword());
    }

    @ExceptionHandler(AccessDeniedException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public String exceptionHandler(AccessDeniedException e) {return e.getMessage();}

    @ExceptionHandler(DuplicateUsernameException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public String exceptionHandler(DuplicateUsernameException e) {
        return e.getMessage();
    }

    @ExceptionHandler(UserNotFoundException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public String exceptionHandler(UserNotFoundException e) {return e.getMessage();}

    @ExceptionHandler(InvalidUsernameException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public String exceptionHandler(InvalidUsernameException e) {return e.getMessage();}

    @ExceptionHandler(InvalidEmailException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public String exceptionHandler(InvalidEmailException e) {return e.getMessage();}

    @ExceptionHandler(InvalidPasswordException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public String exceptionHandler(InvalidPasswordException e) {return e.getMessage();}
}
