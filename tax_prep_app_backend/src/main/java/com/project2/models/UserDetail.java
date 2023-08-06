package com.project2.models;

import java.util.Date;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data public class UserDetail {

    @Pattern(regexp = "\\d{9}", message = "SSN must contain exactly 9 digits")
    private String ssn;

    @NotBlank
    private String firstName;

    private String middleName;

    @NotBlank
    private String lastName;

    @Email
    @NotBlank
    private String email;

    @NotNull
    private Date dob;

    @NotBlank
    private String street1;
    
    private String street2;

    @NotBlank
    private String city;

    @NotBlank
    private String state;

    @Pattern(regexp = "\\d{5}|\\{9}", message = "ZIP must contain either 5 or digits")
    private int zip;

    @NotBlank
    private String country;

    
}


