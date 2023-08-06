package com.project2.models;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data public class Form1099 {

    private int recipientTin;
    private String payerName;
    private String payerStreet1;
    private String payerStreet2;
    private String payerCity;
    private String payerState;
    private int payerZip;
    private int payerTin;
    private double taxesWithheld2;
    private double totalCompensation;
    
}
