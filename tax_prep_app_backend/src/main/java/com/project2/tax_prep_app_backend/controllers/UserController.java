package com.project2.tax_prep_app_backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project2.tax_prep_app_backend.models.User;
import com.project2.tax_prep_app_backend.services.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
    
    @Autowired
    UserService userService;

    // get user by id
    @GetMapping("/userById/{userId}")
    public ResponseEntity<User> findByUserId(@PathVariable long userId) {
        User user = userService.findById(userId);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    // post new user
    @PostMapping("/newUser")
        public ResponseEntity<User> createUser(@RequestBody User user) {
        User newUser = userService.createUser(user);
        return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
    }

    // update user by id
    @PutMapping("/updateUser")
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        User updatedUser = userService.updateUser(user);
        return new ResponseEntity<User>(updatedUser, HttpStatus.OK);
    }

    // delete by id
    @DeleteMapping("/deleteById/{userId}")
    public ResponseEntity<User> deleteUse(@PathVariable long userId) {
        User user = userService.findById(userId);
        userService.deleteUser(user);
        return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
    }
}
