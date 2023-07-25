package com.project2.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project2.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
}
