package com.project2.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project2.repositories.UserRepository;
import com.project2.models.User;


@Service
public class UserService {
    
    @Autowired
    UserRepository userRepository;

    // Retrieves all users
    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    // get user by id
    public User findById(String userId) {
        return userRepository.findById(userId).orElse(null);
    }

    // // add new user to the database
    // public User createUser(User user) {
    //     return userRepository.save(user);
    // }

    // // update an existing user in the database
    // public User updateUser(User user) {
    //     return userRepository.save(user);
    // }

    // // delete a user from the database
    // public void deleteUser(User user) {
    //     userRepository.delete(user);
    // }

}
