package com.project2.models;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data public class FormW2 {    

    @NotBlank
    private String employerName;

    @Pattern(regexp = "\\d{9}", message = "SSN must contain exactly 9 digits")
    private int ein;

    @NotBlank
    private String employerStreet1;

    private String employerStreet2;

    @NotBlank
    private String employerCity;

    @NotBlank
    private String employerState;

    @Pattern(regexp = "\\d{5}|\\d{9}", message = "ZIP must have either 5 or 9 digits")
    private int employerZip;
    
    private double wagesAndTips;
    private double ssWithheld;
    private double taxesWithheld;
    private double medicareWithheld;
    
}
