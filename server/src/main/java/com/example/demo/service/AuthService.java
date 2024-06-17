package com.example.demo.service;

import com.example.demo.dto.RegisterUserDto;
import com.example.demo.entities.Auth;
import com.example.demo.entities.User;
import com.example.demo.exception.*;
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

    public User registerUser(RegisterUserDto registerUserDto) throws DuplicateUsernameException, InvalidUsernameException, InvalidEmailException, InvalidPasswordException {

        User inspectUser = registerUserDto.getUser();
        Auth inspectAuth = registerUserDto.getAuth();

        if(inspectUser.getUsername() == null || inspectUser.getUsername().length() > 255) {
            throw new InvalidUsernameException("Username is invalid!");
        }
        else if(inspectUser.getEmail() == null || inspectUser.getEmail().length() > 255) {
            throw new InvalidEmailException("Email is invalid!");
        }
        else if(inspectAuth.getPassword() == null || inspectAuth.getPassword().length() > 255) {
            throw new InvalidPasswordException("Password is invalid");
        }

        userService.checkIfUserExistsByUsername(registerUserDto.getUser().getUsername());

        registerUserDto.getAuth().setPassword(this.hash(registerUserDto.getAuth().getPassword()));
        authRepository.save(registerUserDto.getAuth());

        return userService.saveOrUpdate(registerUserDto.getUser());
    }

    public User findUserByUsername(String username, String password) throws UserNotFoundException, AccessDeniedException, InvalidUsernameException, InvalidPasswordException {

        if(username == null || username.length() > 255) {
            throw new InvalidUsernameException("Username is invalid!");
        } else if(password == null || password.length() > 255) {
            throw new InvalidPasswordException("Password is invalid!");
        }

        Optional<Auth> foundUser = authRepository.findByUsername(username);

        if(foundUser.isPresent()) {
            Auth auth = foundUser.get();

            if(checkHash(password, auth.getPassword())) {
                return userService.getUserInformation(username);
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
