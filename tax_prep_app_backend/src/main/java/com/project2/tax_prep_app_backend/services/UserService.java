package com.project2.tax_prep_app_backend.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project2.tax_prep_app_backend.models.User;
import com.project2.tax_prep_app_backend.repositories.UserRepository;

@Service
public class UserService {
    
    @Autowired
    UserRepository userRepository;

    // get user by id
    public User findById(long userId) {
        Optional<User> user = userRepository.findById(userId);
        if(user.isPresent()) {
            return user.get();
        }
        return null;
    }

    // add new user to the database
    public User createUser(User user) {
        return userRepository.save(user);
    }

    // update an existing user in the database
    public User updateUser(User user) {
        return userRepository.save(user);
    }

    // delete a user from the database
    public void deleteUser(User user) {
        userRepository.delete(user);
    }

}
