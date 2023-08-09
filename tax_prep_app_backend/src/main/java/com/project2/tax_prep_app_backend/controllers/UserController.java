package com.project2.tax_prep_app_backend.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project2.tax_prep_app_backend.models.Form1099;
import com.project2.tax_prep_app_backend.models.FormW2;
import com.project2.tax_prep_app_backend.models.TaxFiling;
import com.project2.tax_prep_app_backend.models.User;
import com.project2.tax_prep_app_backend.models.UserDetail;
import com.project2.tax_prep_app_backend.services.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    // Get all users
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        if (users.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    // Get user by ID
    @GetMapping("/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable String userId) {
        User user = userService.findById(userId);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    // Create new user    
    @PostMapping("/newUser")
    public ResponseEntity<User> createUser(@RequestBody User user) {       
    
        User newUser = userService.createUser(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    // Update User by ID
    @PutMapping("/{userId}")
    public ResponseEntity<User> updateUser(@PathVariable String userId, @RequestBody User updatedUser) {
        User existingUser = userService.findById(userId);
        if (existingUser == null) {
            return ResponseEntity.notFound().build();
        }      
        
        // Update the properties of the existing user with the properties from the updatedUser
        existingUser.setUsername(updatedUser.getUsername());
        existingUser.setPassword(updatedUser.getPassword());
        existingUser.setEnabled(updatedUser.isEnabled());
        existingUser.setUserDetail(updatedUser.getUserDetail());
        existingUser.setTaxFilings(updatedUser.getTaxFilings());
        existingUser.setFormW2s(updatedUser.getFormW2s());
        existingUser.setForm1099s(updatedUser.getForm1099s());
        
        updatedUser = userService.updateUser(existingUser);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }
    

     // Delete User by ID
    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable String userId) {
        User user = userService.findById(userId);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        userService.deleteUser(user);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Get all W2s for a user
    @GetMapping("/{userId}/formw2s")
    public ResponseEntity<List<FormW2>> getAllFormW2s(@PathVariable String userId) {
        List<FormW2> formW2s = userService.getAllFormW2s(userId);
        return ResponseEntity.ok(formW2s);
    }

    // Get a specific FormW2 for a user by formW2Index
    @GetMapping("/{userId}/formw2s/{formW2Index}")
    public ResponseEntity<FormW2> getFormW2(@PathVariable String userId, @PathVariable int formW2Index) {
        FormW2 formW2 = userService.getFormW2ByIndex(userId, formW2Index);
        return ResponseEntity.ok(formW2);
    }

    // Create a new FormW2 for a user
    @PostMapping("/{userId}/formw2s")
    public ResponseEntity<FormW2> createFormW2(@PathVariable String userId, @RequestBody FormW2 formW2) {
        FormW2 createdFormW2 = userService.addFormW2(userId, formW2);
        return new ResponseEntity<>(createdFormW2, HttpStatus.CREATED);
    }

    // Update a specific FormW2 for a user by formW2Index
    @PutMapping("/{userId}/formw2s/{formW2Index}")
    public ResponseEntity<FormW2> updateFormW2(
            @PathVariable String userId,
            @PathVariable int formW2Index,
            @RequestBody FormW2 updatedFormW2) {
        FormW2 formW2 = userService.updateFormW2(userId, formW2Index, updatedFormW2);
        return ResponseEntity.ok(formW2);
    }

    // Delete a specific FormW2 for a user by formW2Index
    @DeleteMapping("/{userId}/formw2s/{formW2Index}")
    public ResponseEntity<Void> deleteFormW2(@PathVariable String userId, @PathVariable int formW2Index) {
        userService.deleteFormW2(userId, formW2Index);
        return ResponseEntity.noContent().build();
    }

    // Get all Form1099s for a user
    @GetMapping("/{userId}/form1099s")
    public ResponseEntity<List<Form1099>> getAllForm1099s(@PathVariable String userId) {
        List<Form1099> form1099s = userService.getAllForm1099s(userId);
        return ResponseEntity.ok(form1099s);
    }

    // Get a specific Form1099 for a user by form1099Index
    @GetMapping("/{userId}/form1099s/{form1099Index}")
    public ResponseEntity<Form1099> getForm1099(@PathVariable String userId, @PathVariable int form1099Index) {
        Form1099 form1099 = userService.getForm1099(userId, form1099Index);
        return ResponseEntity.ok(form1099);
    }

    // Create a new Form1099 for a user
    @PostMapping("/{userId}/form1099s")
    public ResponseEntity<Form1099> createForm1099(@PathVariable String userId, @RequestBody Form1099 form1099) {
        Form1099 createdForm1099 = userService.createForm1099(userId, form1099);
        return new ResponseEntity<>(createdForm1099, HttpStatus.CREATED);
    }

    // Update a specific Form1099 for a user by form1099Index
    @PutMapping("/{userId}/form1099s/{form1099Index}")
    public ResponseEntity<Form1099> updateForm1099(
            @PathVariable String userId,
            @PathVariable int form1099Index,
            @RequestBody Form1099 updatedForm1099) {
        Form1099 form1099 = userService.updateForm1099(userId, form1099Index, updatedForm1099);
        return ResponseEntity.ok(form1099);
    }

    // Delete a specific Form1099 for a user by form1099Index
    @DeleteMapping("/{userId}/form1099s/{form1099Index}")
    public ResponseEntity<Void> deleteForm1099(@PathVariable String userId, @PathVariable int form1099Index) {
        userService.deleteForm1099(userId, form1099Index);
        return ResponseEntity.noContent().build();
    }
}
