package com.project2;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Date;
import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;

import org.junit.jupiter.api.Test;

import com.project2.tax_prep_app_backend.models.FormW2;

public class FormW2Tests {

  private final Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
  
  @Test
    public void testValidFormW2() {
        FormW2 formW2 = new FormW2();
        formW2.setEmployerName("Test Employer");
        formW2.setEin(123456789);
        formW2.setEmployerStreet1("123 Main St");
        formW2.setEmployerCity("Test City");
        formW2.setEmployerState("Test State");
        formW2.setEmployerZip(12345);
        formW2.setWagesAndTips(50000.0);
        formW2.setSsWithheld(1000.0);
        formW2.setTaxesWithheld(5000.0);
        formW2.setMedicareWithheld(200.0);
        formW2.setDateSubmitted(new Date());

        Set<ConstraintViolation<FormW2>> violations = validator.validate(formW2);
        assertEquals(0, violations.size());
    }
}
