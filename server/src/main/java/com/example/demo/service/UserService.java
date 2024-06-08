package com.example.demo.service;

import com.example.demo.entities.User;
import com.example.demo.exception.DuplicateUsernameException;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User saveOrUpdate(User user) throws DuplicateUsernameException {

        checkIfUserExistsByUsername(user.getUsername());

        return userRepository.save(user);
    }

    public User findUserById(int id) {
        return userRepository.findUserById(id);
    }

    public void checkIfUserExistsByUsername(String username) throws DuplicateUsernameException {

        Optional<User> foundUser = userRepository.findUserByUsername(username);

        if(foundUser.isPresent()) {
            throw new DuplicateUsernameException("Username already exists!");
        }
    }

    public User getUserInformation(String username) {

        User user = userRepository.findUserByUsername(username).get();
        return user;
    }

}
