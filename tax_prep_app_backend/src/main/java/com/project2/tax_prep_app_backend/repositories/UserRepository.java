package com.project2.tax_prep_app_backend.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.project2.tax_prep_app_backend.models.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    
}
