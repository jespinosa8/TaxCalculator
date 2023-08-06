package com.project2.models;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data public class FormW2 {

    private int employeeSsn;
    private String employerName;
    private int ein;
    private String employerStreet1;
    private String employerStreet2;
    private String employerCity;
    private String employerState;
    private int employerZip;
    private double wagesAndTips;
    private double ssWithheld;
    private double taxesWithheld;
    private double medicareWithheld;
    
}
