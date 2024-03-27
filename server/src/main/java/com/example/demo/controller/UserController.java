package com.example.demo.controller;

import com.example.demo.entities.User;
import com.example.demo.exception.DuplicateUsernameException;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(path = "/register/user")
    @ResponseStatus(HttpStatus.OK)
    public User registerNewUser(@RequestBody User user) throws DuplicateUsernameException {
        return userService.saveOrUpdate(user);
    }

    @ExceptionHandler(DuplicateUsernameException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public String exceptionHandler(DuplicateUsernameException e) {return e.getMessage();}
}
