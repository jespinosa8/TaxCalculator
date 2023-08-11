package com.project2.tax_prep_app_backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.apache.commons.codec.digest.DigestUtils;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import org.springframework.security.core.userdetails.UsernameNotFoundException;
// import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import com.project2.tax_prep_app_backend.models.Form1099;
import com.project2.tax_prep_app_backend.models.FormW2;
import com.project2.tax_prep_app_backend.models.TaxFiling;
import com.project2.tax_prep_app_backend.models.User;
import com.project2.tax_prep_app_backend.models.UserDetail;
import com.project2.tax_prep_app_backend.repositories.UserRepository;


@Service
public class UserService /**implements UserDetailsService*/ {
    
    @Autowired
    UserRepository userRepository;

    
    
    // Authenticate Credentials
    public boolean authenticateUser(String username, String password) {
        Optional<User> optionalUser = userRepository.findByUsername(username);

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            String hashedPassword = DigestUtils.sha256Hex(password);

            //compare the hash passwwords
            return user.getPassword().equals(hashedPassword);
        }

        return false;
    }



    // Retrieves all users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // get user by id
    public User findById(String userId) {
        Optional<User> user = userRepository.findById(userId);
        if(user.isPresent()) {
            return user.get();
        }
        return null;
    }

    // add new user to the database
    public User createUser(User user) {
        // Hash the password before saving
        String hashedPassword = DigestUtils.sha256Hex(user.getPassword());
        user.setPassword(hashedPassword);

        // Save the new user
        return userRepository.save(user);
    }

    // update an existing user in the database
    public User updateUser(User user) {
        return userRepository.save(user);
    }

    // delete a user from the database
    public void deleteUser(User user) {
        userRepository.delete(user);
    }

    /*
     * CRUD OPERATIONS FOR USERDETAIL
     */

    // Retrieve UserDetail data
    public UserDetail getUserDetail(String userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return user.getUserDetail();
    }

    // Create UserDetail data
    public UserDetail addUserDetail(String userId, UserDetail userDetail) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        user.setUserDetail(userDetail);
        userRepository.save(user);

        return userDetail;
    }

    // Update UserDetail data
    public UserDetail updateUserDetail(String userId, UserDetail userDetail) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        user.setUserDetail(userDetail);
        userRepository.save(user);
        return userDetail;
    }

    // Delete UserDetail data
    public void deleteUserDetail(String userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        user.setUserDetail(null);
        userRepository.save(user);
    }

     /*
     * CRUD OPERATIONS FOR TAXFILINGS (Only need create)
     */
    
    // Create TaxFiling Data
    public TaxFiling addTaxFiling(String userId, TaxFiling taxFiling) {        
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        user.setTaxFilings(taxFiling);
        userRepository.save(user);
        return taxFiling;        
    }

    /*
     * CRUD OPERATIONS FOR W2 FORM
     */

    // Retrieve all W2s for a specific User
    public List<FormW2> getAllFormW2s(String userId) {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new RuntimeException("User not found"));

        return user.getFormW2s();
    }

    // Retrieve a specific W2 by index (in List of W2s) for a specific User
    public FormW2 getFormW2ByIndex(String userId, int formW2Index) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
    
        List<FormW2> formW2s = user.getFormW2s();
    
        if (formW2Index >= 0 && formW2Index < formW2s.size()) {
            return formW2s.get(formW2Index);
        } else {
            throw new RuntimeException("FormW2 not found");
        }
    }
   

    // Create a new w2 form
    public FormW2 addFormW2(String userId, FormW2 newFormW2) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
    
        List<FormW2> formW2s = user.getFormW2s();
        formW2s.add(newFormW2);
    
        userRepository.save(user); // Save the updated user object
    
        return newFormW2;
    }

  // Update a specific W2 based on it index in List
    public FormW2 updateFormW2(String userId, int formW2Index, FormW2 updatedFormW2) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
    
        List<FormW2> formW2s = user.getFormW2s();
        if (formW2Index >= 0 && formW2Index < formW2s.size()) {
            FormW2 formW2 = formW2s.get(formW2Index);
            
            // Update fields with the values from the updatedFormW2
            formW2.setEmployerName(updatedFormW2.getEmployerName());
            formW2.setEin(updatedFormW2.getEin());
            formW2.setEmployerStreet1(updatedFormW2.getEmployerStreet1());
            formW2.setEmployerStreet2(updatedFormW2.getEmployerStreet2());
            formW2.setEmployerCity(updatedFormW2.getEmployerCity());
            formW2.setEmployerState(updatedFormW2.getEmployerState());
            formW2.setEmployerZip(updatedFormW2.getEmployerZip());
            formW2.setWagesAndTips(updatedFormW2.getWagesAndTips());
            formW2.setSsWithheld(updatedFormW2.getSsWithheld());
            formW2.setTaxesWithheld(updatedFormW2.getTaxesWithheld());
            formW2.setMedicareWithheld(updatedFormW2.getMedicareWithheld());
            
            userRepository.save(user); // Save the updated user object
            return formW2;
        }
    
        throw new RuntimeException("FormW2 not found");
    }

    // Delete a W2
    public void deleteFormW2(String userId, int formW2Index) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
    
        List<FormW2> formW2s = user.getFormW2s();
        if (formW2Index >= 0 && formW2Index < formW2s.size()) {
            formW2s.remove(formW2Index);
            userRepository.save(user); // Save the updated user object
        } else {
            throw new RuntimeException("FormW2 not found");
        }
    }

    /*
     * CRUD OPERATIONS FOR 1099 FORM
     */

     // Retrieve all 1099s for a specific User
    public List<Form1099> getAllForm1099s(String userId) {
    User user = userRepository.findById(userId)
        .orElseThrow(() -> new RuntimeException("User not found"));
        return user.getForm1099s();
    }

    // Retrieve a specific 1099 by index (in List of 1099s) for a specific User
    public Form1099 getForm1099(String userId, int form1099Index) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        List<Form1099> form1099s = user.getForm1099s();
        if (form1099Index >= 0 && form1099Index < form1099s.size()) {
            return form1099s.get(form1099Index);
        } else {
            throw new RuntimeException("Form1099 not found");
        }
    }

    // Create a new 1099
    public Form1099 createForm1099(String userId, Form1099 form1099) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
    
        List<Form1099> form1099s = user.getForm1099s();
        form1099s.add(form1099);
    
        userRepository.save(user);
        return form1099;
    }

    // Update a 1099
    public Form1099 updateForm1099(String userId, int form1099Index, Form1099 updatedForm1099) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
    
        List<Form1099> form1099s = user.getForm1099s();
        if (form1099Index >= 0 && form1099Index < form1099s.size()) {
            form1099s.set(form1099Index, updatedForm1099);
            userRepository.save(user);
            return updatedForm1099;
        } else {
            throw new RuntimeException("Form1099 not found");
        }
    }

    // Delete a 1099
    public void deleteForm1099(String userId, int form1099Index) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
    
        List<Form1099> form1099s = user.getForm1099s();
        if (form1099Index >= 0 && form1099Index < form1099s.size()) {
            form1099s.remove(form1099Index);
            userRepository.save(user);
        } else {
            throw new RuntimeException("Form1099 not found");
        }
    }

    // @Override
    // public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    //     User user = userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException(username + " not found."));
    //     return user;
    // }
    
}
