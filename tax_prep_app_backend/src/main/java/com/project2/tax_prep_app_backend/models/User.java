package com.project2.tax_prep_app_backend.models;

// import java.util.Collection;
// import java.util.HashSet;
import java.util.List;
// import java.util.Set;

import javax.validation.constraints.NotNull;

import lombok.Data;
import lombok.NoArgsConstructor;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
// import org.springframework.security.core.GrantedAuthority;
// import org.springframework.security.core.authority.SimpleGrantedAuthority;
// import org.springframework.security.core.userdetails.UserDetails;




@NoArgsConstructor
@Document(collection = "users")
@Data public class User /**implements UserDetails*/{
    
    @Id    
    private String id;
    
    @NotNull
    private String username;
    
    @NotNull
    private String password;

    private String role;

    private boolean enabled;
    
    // Must include @Field annotation with DB field name if variable name is different than field in DB
    @Field("user_detail")
    private UserDetail userDetail;
    
    @Field("tax_filings")
    private TaxFiling taxFilings;

    @Field("form_w2s")
    private List<FormW2> formW2s;

    @Field("form_1099s")
    private List<Form1099> form1099s;

    // @Override
    // public Collection<? extends GrantedAuthority> getAuthorities() {
    //     Set<SimpleGrantedAuthority> authorities = new HashSet<>();
    //     SimpleGrantedAuthority userRole = new SimpleGrantedAuthority(role);
    //     authorities.add(userRole);

    //     return authorities;
    // }

    // @Override
    // public boolean isAccountNonExpired() {
    //     return true;
    // }
    // @Override
    // public boolean isAccountNonLocked() {
    //     return true;
    // }
    // @Override
    // public boolean isCredentialsNonExpired() {
    //     return true;
    // }
    // @Override
    // public boolean isEnabled() {
    //     return true;
    // } 

}
