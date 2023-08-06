package com.project2.models;

import java.util.List;

import javax.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

import org.springframework.data.mongodb.core.mapping.Document;



@NoArgsConstructor
@Document(collection = "users")
@Data public class User {
    
    @Id    
    private String id;    
    private String username;    
    private String password;    
    private boolean enabled;
    
    private UserDetail userDetail;
    private List<TaxFiling> taxFilings;
    
    
}
