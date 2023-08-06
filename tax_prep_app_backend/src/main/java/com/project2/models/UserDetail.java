package com.project2.models;

import java.util.Date;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data public class UserDetail {

    private int ssn;
    private String firstName;
    private String middleName;
    private String lastName;
    private String email;
    private Date dob;
    private String street1;
    private String street2;
    private String city;
    private String state;
    private int zip;
    private String country;

    
}


