package com.project2;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

import com.project2.tax_prep_app_backend.models.UserDetail;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import java.util.Date;
import java.util.Set;

public class UserDetailTests {
  
   private final ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
    private final Validator validator = factory.getValidator();

    @Test
    public void testValidUserDetail() {
        UserDetail userDetail = new UserDetail();
        userDetail.setSsn("123456789");
        userDetail.setFirstName("John");
        userDetail.setLastName("Doe");
        userDetail.setEmail("john.doe@example.com");
        userDetail.setDob(new Date());
        userDetail.setStreet1("123 Main St");
        userDetail.setCity("City");
        userDetail.setState("State");
        userDetail.setZip(12345);
        userDetail.setCountry("Country");

        Set<ConstraintViolation<UserDetail>> violations = validator.validate(userDetail);
        assertTrue(violations.isEmpty());
    }

    @Test
    public void testNullDob() {
        UserDetail userDetail = new UserDetail();
        userDetail.setDob(null);

        Set<ConstraintViolation<UserDetail>> violations = validator.validate(userDetail);
        assertFalse(violations.isEmpty());
    }
}
