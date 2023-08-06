package com.project2.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.project2.models.UserDetail;

@Repository
public interface UserDetailRepository extends MongoRepository<UserDetail, String> {    
    

    
}
