package com.project2;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

import com.project2.tax_prep_app_backend.models.TaxFiling;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import java.util.Set;

public class TaxFilingTests {

   private final ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
    private final Validator validator = factory.getValidator();

    @Test
    public void testTotalRefundAmountPositive() {
        TaxFiling taxFiling = new TaxFiling();
        taxFiling.setTotalRefundAmount(100.0);

        Set<ConstraintViolation<TaxFiling>> violations = validator.validate(taxFiling);
        assertTrue(violations.isEmpty());
    }

    @Test
    public void testTotalRefundAmountZero() {
        TaxFiling taxFiling = new TaxFiling();
        taxFiling.setTotalRefundAmount(0.0);

        Set<ConstraintViolation<TaxFiling>> violations = validator.validate(taxFiling);
        assertTrue(violations.isEmpty());
    }

    @Test
    public void testTotalRefundAmountNegative() {
        TaxFiling taxFiling = new TaxFiling();
        taxFiling.setTotalRefundAmount(-100.0);

        Set<ConstraintViolation<TaxFiling>> violations = validator.validate(taxFiling);
        assertFalse(violations.isEmpty());
    }

    @Test
    public void testTotalAmountDuePositive() {
        TaxFiling taxFiling = new TaxFiling();
        taxFiling.setTotalAmountDue(200.0);

        Set<ConstraintViolation<TaxFiling>> violations = validator.validate(taxFiling);
        assertTrue(violations.isEmpty());
    }

    @Test
    public void testTotalAmountDueZero() {
        TaxFiling taxFiling = new TaxFiling();
        taxFiling.setTotalAmountDue(0.0);

        Set<ConstraintViolation<TaxFiling>> violations = validator.validate(taxFiling);
        assertTrue(violations.isEmpty());
    }

    @Test
    public void testTotalAmountDueNegative() {
        TaxFiling taxFiling = new TaxFiling();
        taxFiling.setTotalAmountDue(-200.0);

        Set<ConstraintViolation<TaxFiling>> violations = validator.validate(taxFiling);
        assertFalse(violations.isEmpty());
    }
}


