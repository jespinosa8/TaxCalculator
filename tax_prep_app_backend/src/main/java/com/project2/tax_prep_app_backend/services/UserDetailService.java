package com.project2.tax_prep_app_backend.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project2.tax_prep_app_backend.models.UserDetail;
import com.project2.tax_prep_app_backend.repositories.UserDetailRepository;

@Service
public class UserDetailService {

    @Autowired
    UserDetailRepository userDetailRepository;

    // get UserDetail by userDetailId
    public UserDetail findById(long userDetailId) {
        Optional<UserDetail> userDetail = userDetailRepository.findById(userDetailId);
        if (userDetail.isPresent()) {
            return userDetail.get();
        }
        return null;
    }

    // get UserDetail by userId
    public UserDetail findByUserId(long userId) {
        Optional<UserDetail> userDetail = userDetailRepository.findByUserId(userId);
        if (userDetail.isPresent()) {
            return userDetail.get();
        }
        return null;
    }

    // add new UserDetail to the database
    public UserDetail createUserDetail(UserDetail userDetail) {
        return userDetailRepository.save(userDetail);
    }

    // update an existing UserDetail in the database
    public UserDetail updateUserDetail(UserDetail userDetail) {
        return userDetailRepository.save(userDetail);
    }

    // delete a UserDetail from the database
    public void deleteUserDetail(UserDetail userDetail) {
        userDetailRepository.delete(userDetail);
    }
}
