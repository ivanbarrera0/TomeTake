package com.example.demo.service;

import com.example.demo.dto.RegisterUserDto;
import com.example.demo.entities.User;
import com.example.demo.exception.DuplicateUsernameException;
import com.example.demo.repository.AuthRepository;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private AuthRepository authRepository;
    private UserService userService;

    @Autowired
    public AuthService(AuthRepository authRepository, UserService userService) {
        this.authRepository = authRepository;
        this.userService = userService;
    }

    /*
    These methods are used to hash the password and to check if the password is correct
    when authenticating a user
     */

    public User registerUser(RegisterUserDto registerUserDto) throws DuplicateUsernameException {

        userService.findUserByUsername(registerUserDto.getUser().getUsername());

        registerUserDto.getAuth().setPassword(this.hash(registerUserDto.getAuth().getPassword()));
        authRepository.save(registerUserDto.getAuth());

        return userService.saveOrUpdate(registerUserDto.getUser());
    }

    public String hash(String text) {
        String salt = BCrypt.gensalt(12);
        return BCrypt.hashpw(text, salt);
    }

    public boolean checkHash(String text, String hash) {
        return BCrypt.checkpw(text, hash);
    }
}
