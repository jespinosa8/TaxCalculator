package com.project2;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertSame;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.apache.commons.codec.digest.DigestUtils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.dao.DuplicateKeyException;

import com.project2.tax_prep_app_backend.models.Form1099;
import com.project2.tax_prep_app_backend.models.FormW2;
import com.project2.tax_prep_app_backend.models.User;
import com.project2.tax_prep_app_backend.models.UserDetail;
import com.project2.tax_prep_app_backend.repositories.UserRepository;
import com.project2.tax_prep_app_backend.services.UserService;

@RunWith(MockitoJUnitRunner.class)
public class UserServiceTests {

    @InjectMocks
    private UserService userService;

    @Mock
    private UserRepository userRepository;

      @Test
    public void testCreateUser_Success() {
        User user = new User();
        user.setUsername("testUser");
        user.setPassword("testPassword"); // This is the plain text password
        when(userRepository.save(any(User.class))).thenReturn(user);

        User createdUser = userService.createUser(user);

        assertNotNull(createdUser);
        assertEquals("testUser", createdUser.getUsername());

        // Hash the expected password
        String expectedHashedPassword = DigestUtils.sha256Hex("testPassword");
        
        // Compare the hashed password in the created user with the expected hash
        assertEquals(expectedHashedPassword, createdUser.getPassword());
        
        verify(userRepository, times(1)).save(any(User.class));
    }

    // Test for valid credentials
    @Test
    public void testAuthenticateUser_Success() {
        String username = "testUser";
        String password = "testPassword";
        String hashedPassword = DigestUtils.sha256Hex(password);

        User user = new User();
        user.setUsername(username);
        user.setPassword(hashedPassword);
        
        when(userRepository.findByUsername(username)).thenReturn(Optional.of(user));

        User authenticatedUser = userService.authenticateUser(username, password);

        assertNotNull(authenticatedUser);
        assertEquals(username, authenticatedUser.getUsername());
        assertEquals(hashedPassword, authenticatedUser.getPassword());
    }

    // Test for bad credentials
    @Test
    public void testAuthenticateUser_Failure() {
        String username = "testUser";
        String password = "testPassword";
        String wrongPassword = "wrongPassword";
        String hashedPassword = DigestUtils.sha256Hex(password);

        User user = new User();
        user.setUsername(username);
        user.setPassword(hashedPassword);

        when(userRepository.findByUsername(username)).thenReturn(Optional.of(user));

        User authenticatedUser = userService.authenticateUser(username, wrongPassword);

        assertNull(authenticatedUser);
    }
    
    // Test if getAllUsers functions properly
    @Test
    public void testGetAllUsers() {
        List<User> userList = new ArrayList<>();
        User user1 = new User();
        user1.setUsername("user1");
        userList.add(user1);

        User user2 = new User();
        user2.setUsername("user2");
        userList.add(user2);

        when(userRepository.findAll()).thenReturn(userList);

        List<User> result = userService.getAllUsers();

        assertEquals(2, result.size());

        // Compare individual elements
        assertEquals("user1", result.get(0).getUsername());
        assertEquals("user2", result.get(1).getUsername());
    }

    // Test FindById Success
    @Test
    public void testFindById_Success() {
        String userId = "userId";
        User user = new User();
        user.setId(userId);

        when(userRepository.findById(userId)).thenReturn(Optional.of(user));

        User foundUser = userService.findById(userId);

        assertNotNull(foundUser);
        assertEquals(userId, foundUser.getId());
    }

    // Test FindById Failure
    @Test(expected = RuntimeException.class)
    public void testFindById_UserNotFound() {
        String userId = "nonExistentId";

        when(userRepository.findById(userId)).thenReturn(Optional.empty());

        userService.findById(userId);
    }

    // Test the Edit User function
    @Test
    public void testUpdateUser_Success() {
        User user = new User();
        user.setId("userId");
        user.setUsername("testUser");
        user.setPassword("testPassword");
        
        when(userRepository.save(any(User.class))).thenReturn(user);

        User updatedUser = userService.updateUser(user);

        assertNotNull(updatedUser);
        assertEquals("userId", updatedUser.getId());
        assertEquals("testUser", updatedUser.getUsername());
        assertEquals("testPassword", updatedUser.getPassword());
        verify(userRepository, times(1)).save(any(User.class));
    }

    // Test deleteUser Success
    @Test
    public void testDeleteUser_Success() {
        User user = new User();
        user.setId("userId");
        user.setUsername("testUser");
        user.setPassword("testPassword");
        
        userService.deleteUser(user);

        verify(userRepository, times(1)).delete(eq(user));
    }

    // Test deleteUser Failure
    @Test(expected = RuntimeException.class)
    public void testDeleteUser_Failure() {
        User user = new User();
        user.setId("userId");
        user.setUsername("testUser");
        user.setPassword("testPassword");
        
        // Mock userRepository to throw an exception when delete is called
        doThrow(new RuntimeException("Delete failed")).when(userRepository).delete(eq(user));

        userService.deleteUser(user);
    }

    // Test getUserDetail Success
    @Test
    public void testGetUserDetail_Success() {
        String userId = "userId";
        User user = new User();
        user.setId(userId);
        UserDetail userDetail = new UserDetail();
        user.setUserDetail(userDetail);

        when(userRepository.findById(userId)).thenReturn(Optional.of(user));

        UserDetail foundUserDetail = userService.getUserDetail(userId);

        assertNotNull(foundUserDetail);
        assertSame(userDetail, foundUserDetail);
    }

    // W2 Tests
    @Test
    public void testGetAllFormW2s_Success() {
        String userId = "userId";
        User user = new User();
        user.setId(userId);
        FormW2 formW2 = new FormW2();
        formW2.setEmployerName("Test Employer");

        user.getFormW2s().add(formW2);

        when(userRepository.findById(userId)).thenReturn(Optional.of(user));

        List<FormW2> formW2List = userService.getAllFormW2s(userId);

        assertNotNull(formW2List);
        assertEquals(1, formW2List.size());
        assertEquals("Test Employer", formW2List.get(0).getEmployerName());
    }

    @Test(expected = RuntimeException.class)
    public void testGetAllFormW2s_UserNotFound() {
        String userId = "nonExistentId";

        when(userRepository.findById(userId)).thenReturn(Optional.empty());

        userService.getAllFormW2s(userId);
    }

    @Test
    public void testGetFormW2ByIndex_Success() {
        String userId = "userId";
        int formW2Index = 0;

        FormW2 formW2 = new FormW2();
        formW2.setEmployerName("Test Employer");

        User user = new User();
        user.setId(userId);
        user.getFormW2s().add(formW2);

        when(userRepository.findById(userId)).thenReturn(Optional.of(user));

        FormW2 retrievedFormW2 = userService.getFormW2ByIndex(userId, formW2Index);

        assertNotNull(retrievedFormW2);
        assertEquals("Test Employer", retrievedFormW2.getEmployerName());
    }

    @Test(expected = RuntimeException.class)
    public void testGetFormW2ByIndex_UserNotFound() {
        String userId = "nonExistentId";

        when(userRepository.findById(userId)).thenReturn(Optional.empty());

        userService.getFormW2ByIndex(userId, 0);
    }

    @Test(expected = RuntimeException.class)
    public void testGetFormW2ByIndex_FormW2NotFound() {
        String userId = "userId";
        int formW2Index = 0;

        User user = new User();
        user.setId(userId);

        when(userRepository.findById(userId)).thenReturn(Optional.of(user));

        userService.getFormW2ByIndex(userId, formW2Index);
    }

    @Test(expected = RuntimeException.class)
    public void testGetFormW2ByIndex_FormW2IndexOutOfRange() {
        String userId = "userId";
        int formW2Index = 5;

        FormW2 formW2 = new FormW2();
        formW2.setEmployerName("Test Employer");

        User user = new User();
        user.setId(userId);
        user.getFormW2s().add(formW2);

        when(userRepository.findById(userId)).thenReturn(Optional.of(user));

        userService.getFormW2ByIndex(userId, formW2Index);
    }

    // 1099 Tests
    @Test
    public void testCreateForm1099_Success() {
        String userId = "userId";

        Form1099 form1099 = new Form1099();
        form1099.setPayerName("Test Payer");

        User user = new User();
        user.setId(userId);

        when(userRepository.findById(userId)).thenReturn(Optional.of(user));

        Form1099 createdForm1099 = userService.createForm1099(userId, form1099);

        assertNotNull(createdForm1099);
        assertEquals("Test Payer", createdForm1099.getPayerName());
        assertTrue(user.getForm1099s().contains(createdForm1099));
    }

    @Test(expected = RuntimeException.class)
    public void testCreateForm1099_UserNotFound() {
        String userId = "nonExistentId";

        Form1099 form1099 = new Form1099();
        form1099.setPayerName("Test Payer");

        when(userRepository.findById(userId)).thenReturn(Optional.empty());

        userService.createForm1099(userId, form1099);
    }

    @Test
    public void testUpdateForm1099_Success() {
        String userId = "userId";
        int form1099Index = 0;

        Form1099 form1099 = new Form1099();
        form1099.setPayerName("Test Payer");

        User user = new User();
        user.setId(userId);
        user.getForm1099s().add(form1099);

        when(userRepository.findById(userId)).thenReturn(Optional.of(user));

        Form1099 updatedForm1099 = new Form1099();
        updatedForm1099.setPayerName("Updated Payer");

        Form1099 result = userService.updateForm1099(userId, form1099Index, updatedForm1099);

        assertNotNull(result);
        assertEquals("Updated Payer", result.getPayerName());
        assertEquals("Updated Payer", user.getForm1099s().get(form1099Index).getPayerName());
    }

    @Test(expected = RuntimeException.class)
    public void testUpdateForm1099_UserNotFound() {
        String userId = "nonExistentId";
        int form1099Index = 0;

        Form1099 updatedForm1099 = new Form1099();
        updatedForm1099.setPayerName("Updated Payer");

        when(userRepository.findById(userId)).thenReturn(Optional.empty());

        userService.updateForm1099(userId, form1099Index, updatedForm1099);
    }

    @Test(expected = RuntimeException.class)
    public void testUpdateForm1099_Form1099NotFound() {
        String userId = "userId";
        int form1099Index = 0;

        when(userRepository.findById(userId)).thenReturn(Optional.of(new User()));

        Form1099 updatedForm1099 = new Form1099();
        updatedForm1099.setPayerName("Updated Payer");

        userService.updateForm1099(userId, form1099Index, updatedForm1099);
    }

    @Test
    public void testDeleteForm1099_Success() {
        String userId = "userId";
        int form1099Index = 0;

        Form1099 form1099 = new Form1099();
        form1099.setPayerName("Test Payer");

        User user = new User();
        user.setId(userId);
        user.getForm1099s().add(form1099);

        when(userRepository.findById(userId)).thenReturn(Optional.of(user));

        userService.deleteForm1099(userId, form1099Index);

        assertTrue(user.getForm1099s().isEmpty());
    }

    @Test(expected = RuntimeException.class)
    public void testDeleteForm1099_UserNotFound() {
        String userId = "nonExistentId";
        int form1099Index = 0;

        when(userRepository.findById(userId)).thenReturn(Optional.empty());

        userService.deleteForm1099(userId, form1099Index);
    }

    @Test(expected = RuntimeException.class)
    public void testDeleteForm1099_Form1099NotFound() {
        String userId = "userId";
        int form1099Index = 0;

        when(userRepository.findById(userId)).thenReturn(Optional.of(new User()));

        userService.deleteForm1099(userId, form1099Index);
    }
}
