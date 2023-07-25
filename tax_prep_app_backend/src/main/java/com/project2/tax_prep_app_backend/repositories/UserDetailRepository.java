package com.project2.tax_prep_app_backend.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.project2.tax_prep_app_backend.models.UserDetail;

@Repository
public interface UserDetailRepository extends JpaRepository<UserDetail, Long> {

    // Query to retrieve the user datails for a user based on user id
    @Query("SELECT ud FROM UserDetail ud WHERE ud.user.userId = :userId")
    @Transactional(readOnly = true)
    public Optional<UserDetail> findByUserId(long userId);

    
}
