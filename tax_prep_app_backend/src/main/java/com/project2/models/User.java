package com.project2.models;

import java.util.List;

import javax.validation.constraints.NotNull;

import lombok.Data;
import lombok.NoArgsConstructor;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@NoArgsConstructor
@Document(collection = "users")
@Data public class User {
    
    @Id    
    private String id;
    
    @NotNull
    private String username;
    
    @NotNull
    private String password;

    private boolean enabled;
    
    private UserDetail userDetail;
    private TaxFiling taxFilings;
    private List<FormW2> formW2s;
    private List<Form1099> form1099s;    
    
}
