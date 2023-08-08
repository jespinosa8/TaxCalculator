package com.project2.tax_prep_app_backend.models;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@Data public class TaxFiling {

    private boolean married;
    private int dependents;

    @Field("total_refund_amount")
    private double totalRefundAmount;

    @Field("total_amount_due")
    private double totalAmountDue;    
}
