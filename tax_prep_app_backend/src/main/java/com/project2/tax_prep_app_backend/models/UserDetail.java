package com.project2.tax_prep_app_backend.models;

import java.util.Date;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.springframework.data.mongodb.core.mapping.Field;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@Data public class UserDetail {

    @Pattern(regexp = "\\d{9}", message = "SSN must contain exactly 9 digits")
    private String ssn;

    @Field("first_name")
    @NotBlank
    private String firstName;

    @Field("middle_name")
    private String middleName;

    @Field("last_name")
    @NotBlank
    private String lastName;

    @Email
    @NotBlank
    private String email;
    
    @JsonFormat(pattern = "MM-dd-yyyy")
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


