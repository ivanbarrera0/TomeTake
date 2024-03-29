package com.example.demo.service;

import com.example.demo.dto.RegisterUserDto;
import com.example.demo.entities.Auth;
import com.example.demo.entities.User;
import com.example.demo.exception.AccessDeniedException;
import com.example.demo.exception.DuplicateUsernameException;
import com.example.demo.exception.UserNotFoundException;
import com.example.demo.repository.AuthRepository;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

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

    public User findUserByUsername(String username, String password) throws UserNotFoundException, AccessDeniedException {

        Optional<Auth> foundUser = authRepository.findByUsername(username);

        if(foundUser.isPresent()) {
            Auth auth = foundUser.get();

            if(checkHash(password, auth.getPassword())) {
                User user = userService.getUserInformation(username);
                return user;
            }
            else {
                throw new AccessDeniedException("Access denied!");
            }
        }
        else {throw new UserNotFoundException("Username or Password is incorrect!");}
    }


    public String hash(String text) {
        String salt = BCrypt.gensalt(12);
        return BCrypt.hashpw(text, salt);
    }

    public boolean checkHash(String text, String hash) {
        return BCrypt.checkpw(text, hash);
    }
}
