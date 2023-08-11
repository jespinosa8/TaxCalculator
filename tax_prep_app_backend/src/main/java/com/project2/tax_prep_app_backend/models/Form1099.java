package com.project2.tax_prep_app_backend.models;

import java.util.Date;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.springframework.data.mongodb.core.mapping.Field;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data public class Form1099 {

    @Field("payer_tin")
    @Pattern(regexp = "\\d{9}", message = "Payer TIN must contain exactly 9 digits")
    private int payerTin;
    
    @Field("payer_name")
    @NotBlank
    private String payerName;

    @Field("payer_street1")
    @NotBlank
    private String payerStreet1;

    @Field("payer_street2")
    private String payerStreet2;

    @Field("payer_city")
    @NotBlank
    private String payerCity;

    @Field("payer_state")
    @NotBlank
    private String payerState;

    @Field("payer_zip")
    @Pattern(regexp = "\\d{5}|\\d{9}", message = "ZIP must have either 5 or 9 digits")
    private int payerZip;
    
    @Field("taxes_withheld2")
    private double taxesWithheld2;

    @Field("total_compensation")
    private double totalCompensation;

    @JsonFormat(pattern = "MM-dd-yyyy")
    @Field("date_submitted2")
    private Date dateSubmitted2;
    
}
