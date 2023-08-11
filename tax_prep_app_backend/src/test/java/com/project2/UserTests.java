package com.project2;

import com.project2.tax_prep_app_backend.models.Form1099;
import com.project2.tax_prep_app_backend.models.FormW2;
import com.project2.tax_prep_app_backend.models.TaxFiling;
import com.project2.tax_prep_app_backend.models.User;
import com.project2.tax_prep_app_backend.models.UserDetail;

import org.junit.jupiter.api.Test;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class UserTests {

    private final Validator validator = Validation.buildDefaultValidatorFactory().getValidator();

    @Test
    public void testValidUser() {
        User user = new User();
        user.setUsername("testuser");
        user.setPassword("password");

        Set<ConstraintViolation<User>> violations = validator.validate(user);
        assertEquals(0, violations.size());
    }

    @Test
    public void testBlankUsername() {
        User user = new User();
        user.setUsername("");
        user.setPassword("password");

        Set<ConstraintViolation<User>> violations = validator.validate(user);
        assertEquals(1, violations.size());
        assertEquals("must not be blank", violations.iterator().next().getMessage());
    }

    @Test
    public void testBlankPassword() {
        User user = new User();
        user.setUsername("testuser");
        user.setPassword("");

        Set<ConstraintViolation<User>> violations = validator.validate(user);
        assertEquals(1, violations.size());
        assertEquals("must not be blank", violations.iterator().next().getMessage());
    }

     @Test
    public void testValidUserDetail() {
        User user = new User();
        user.setUsername("testuser");
        user.setPassword("password");
        user.setUserDetail(new UserDetail()); // Assuming UserDetail class exists

        Set<ConstraintViolation<User>> violations = validator.validate(user);
        assertEquals(0, violations.size());
    }

    @Test
    public void testValidTaxFiling() {
        User user = new User();
        user.setUsername("testuser");
        user.setPassword("password");
        user.setTaxFilings(new TaxFiling()); // Assuming TaxFiling class exists

        Set<ConstraintViolation<User>> violations = validator.validate(user);
        assertEquals(0, violations.size());
    }
    
     @Test
    public void testValidFormW2s() {
        User user = new User();
        user.setUsername("testuser");
        user.setPassword("password");

        FormW2 formW2 = new FormW2();
        formW2.setEmployerName("Test Employer");

        List<FormW2> formW2s = new ArrayList<>();
        formW2s.add(formW2);
        user.setFormW2s(formW2s);

        Set<ConstraintViolation<User>> violations = validator.validate(user);
        assertEquals(0, violations.size());
    }

    @Test
    public void testValidForm1099s() {
        User user = new User();
        user.setUsername("testuser");
        user.setPassword("password");

        Form1099 form1099 = new Form1099();
        form1099.setPayerName("Test Payer");

        List<Form1099> form1099s = new ArrayList<>();
        form1099s.add(form1099);
        user.setForm1099s(form1099s);

        Set<ConstraintViolation<User>> violations = validator.validate(user);
        assertEquals(0, violations.size());
    
    }
}

