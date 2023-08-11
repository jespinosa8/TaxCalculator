package com.project2.tax_prep_app_backend.models;


import javax.validation.constraints.Min;

import org.springframework.data.mongodb.core.mapping.Field;

import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@Data public class TaxFiling {

    private boolean married;
    private int dependents;
    
    // Must include @Field annotation with DB field name if variable name is different than field in DB
    @Field("total_refund_amount")
    @Min(value = 0)
    private double totalRefundAmount;

    @Field("total_amount_due")
    @Min(value = 0)
    private double totalAmountDue;    
}
