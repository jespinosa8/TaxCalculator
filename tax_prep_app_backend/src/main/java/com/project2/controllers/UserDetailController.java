package com.project2.controllers;

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

import com.project2.models.UserDetail;
import com.project2.services.UserDetailService;

@RestController
@RequestMapping("/userDetails")
public class UserDetailController {
    
    @Autowired
    UserDetailService userDetailService;

    // get by user detail id
    @GetMapping("/userDetailById/{userDetailId}")
    public ResponseEntity<UserDetail> findByUserDetailId(@PathVariable long userDetailId) {
        UserDetail userDetail = userDetailService.findById(userDetailId);
        if(userDetail == null) {
            return ResponseEntity.noContent().build();
        }

        return new ResponseEntity<UserDetail>(userDetail, HttpStatus.OK);
    }

    // get by user id
    @GetMapping("/userDetailByUserId/{userId}")
    public ResponseEntity<UserDetail> findByUserId(@PathVariable long userId) {
        UserDetail userDetail = userDetailService.findByUserId(userId);

        if(userDetail == null) {
            return ResponseEntity.noContent().build();
        }

        return new ResponseEntity<UserDetail>(userDetail, HttpStatus.OK);
    }

    // post new user details
    @PostMapping("/newUserDetail")
        public ResponseEntity<UserDetail> createUserDetail(@RequestBody UserDetail userDetail) {
        UserDetail newUserDetail = userDetailService.createUserDetail(userDetail);
        return new ResponseEntity<UserDetail>(newUserDetail, HttpStatus.CREATED);
    }

    // update user details by id
    @PutMapping("/updateUserDetail")
    public ResponseEntity<UserDetail> updateUserDetail(@RequestBody UserDetail userDetail) {
        UserDetail updatedUserDetail = userDetailService.updateUserDetail(userDetail);
        return new ResponseEntity<UserDetail>(updatedUserDetail, HttpStatus.OK);
    }

    // delete by id
    @DeleteMapping("/deleteById/{userDetailId}")
    public ResponseEntity<UserDetail> deleteUserDetail(@PathVariable long userDetailId) {
        UserDetail userDetail = userDetailService.findById(userDetailId);
        userDetailService.deleteUserDetail(userDetail);
        return new ResponseEntity<UserDetail>(HttpStatus.NO_CONTENT);
    }

    
}
