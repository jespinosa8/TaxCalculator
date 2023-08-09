package com.project2.tax_prep_app_backend.models;

import java.util.Date;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.springframework.data.mongodb.core.mapping.Field;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@Data public class FormW2 {    

    @Field("employer_name")
    @NotBlank
    private String employerName;

    @Pattern(regexp = "\\d{9}", message = "SSN must contain exactly 9 digits")
    private int ein;

    @Field("employer_street1")
    @NotBlank
    private String employerStreet1;

    @Field("employer_street2")
    private String employerStreet2;

    @Field("employer_city")
    @NotBlank
    private String employerCity;

    @Field("employer_state")
    @NotBlank
    private String employerState;

    @Field("employer_zip")
    @Pattern(regexp = "\\d{5}|\\d{9}", message = "ZIP must have either 5 or 9 digits")
    private int employerZip;
    
    @Field("wages_and_tips")
    private double wagesAndTips;

    @Field("ss_withheld")
    private double ssWithheld;

    @Field("taxes_withheld")
    private double taxesWithheld;

    @Field("medicare_withheld")
    private double medicareWithheld;
    
    @JsonFormat(pattern = "MM-dd-yyyy")
    @Field("date_submitted")
    private Date dateSubmitted;
}
