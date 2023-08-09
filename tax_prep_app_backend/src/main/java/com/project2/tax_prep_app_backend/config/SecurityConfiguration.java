package com.project2.tax_prep_app_backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@Configuration
@EnableMethodSecurity
public class SecurityConfiguration {
    
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
        .authorizeHttpRequests((authorizeHttpRequests) -> 
            authorizeHttpRequests
                .mvcMatchers(HttpMethod.POST, "/users/newUser").permitAll()

                .mvcMatchers(HttpMethod.GET, "/users/**").authenticated()
                .mvcMatchers(HttpMethod.PUT, "/users/**").authenticated()
                .mvcMatchers(HttpMethod.DELETE, "/users/**").authenticated()
                
                .mvcMatchers("/").permitAll()
                .mvcMatchers("/signup").permitAll()
                .mvcMatchers("/home").authenticated()
                .mvcMatchers("/tax-summary").authenticated()
                .mvcMatchers("/tax-filing").authenticated()
                .mvcMatchers("/add-w2").authenticated()
                .mvcMatchers("/add-1099").authenticated()
                .mvcMatchers("/personal-info").authenticated()
        )
        .httpBasic();
        http.csrf((csrf) ->
            csrf.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse()).ignoringAntMatchers("/", "/signup", "/users/newUser")
        );
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(10);
    }
}