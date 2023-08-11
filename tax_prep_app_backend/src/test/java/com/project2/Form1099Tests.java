package com.project2;

import com.project2.tax_prep_app_backend.models.Form1099;
import org.junit.jupiter.api.Test;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import java.util.Date;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class Form1099Tests {

    private final Validator validator = Validation.buildDefaultValidatorFactory().getValidator();

    @Test
    public void testValidForm1099() {
        Form1099 form1099 = new Form1099();
        form1099.setPayerTin(123456789);
        form1099.setPayerName("Test Payer");
        form1099.setPayerStreet1("123 Main St");
        form1099.setPayerCity("Test City");
        form1099.setPayerState("TX");        
        form1099.setTaxesWithheld2(1000.0);
        form1099.setTotalCompensation(50000.0);
        form1099.setDateSubmitted2(new Date());

        Set<ConstraintViolation<Form1099>> violations = validator.validate(form1099);
        assertEquals(0, violations.size());
    }
  

    
}



