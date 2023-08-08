package com.project2.tax_prep_app_backend.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.project2.tax_prep_app_backend.models.UserDetail;

@Repository
public interface UserDetailRepository extends MongoRepository<UserDetail, String> {    
    

    
}
