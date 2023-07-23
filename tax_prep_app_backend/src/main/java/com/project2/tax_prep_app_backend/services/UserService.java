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

    public User findById(long userId) {
        Optional<User> user = userRepository.findById(userId);
        if(user.isPresent()) {
            return user.get();
        }
        return null;
    }

}
