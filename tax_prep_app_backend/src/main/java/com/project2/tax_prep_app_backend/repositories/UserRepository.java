package com.project2.tax_prep_app_backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project2.tax_prep_app_backend.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
}
