package com.project2.tax_prep_app_backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project2.tax_prep_app_backend.models.User;
import com.project2.tax_prep_app_backend.services.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
    
    @Autowired
    UserService userService;

    @GetMapping("/userById/{userId}")
    public ResponseEntity<User> findByUserId(@PathVariable long userId) {
        User user = userService.findById(userId);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }
}
