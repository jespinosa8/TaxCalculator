package com.project2.models;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data public class Form1099 {

    @Pattern(regexp = "\\d{9}", message = "Payer TIN must contain exactly 9 digits")
    private int payerTin;
    
    @NotBlank
    private String payerName;

    @NotBlank
    private String payerStreet1;

    private String payerStreet2;

    @NotBlank
    private String payerCity;

    @NotBlank
    private String payerState;

    @Pattern(regexp = "\\d{5}|\\d{9}", message = "ZIP must have either 5 or 9 digits")
    private int payerZip;
    
    private double taxesWithheld2;
    private double totalCompensation;
    
}
