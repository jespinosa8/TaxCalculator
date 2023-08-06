package com.project2.models;

import java.util.List;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data public class TaxFiling {

    private boolean married;
    private int dependents;
    private double totalRefundAmount;
    private double totalAmountDue;
    private List<FormW2> formW2s;
    private List<Form1099> form1099s;
}
