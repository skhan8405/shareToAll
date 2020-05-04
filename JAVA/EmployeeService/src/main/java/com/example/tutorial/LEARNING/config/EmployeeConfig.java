package com.example.tutorial.LEARNING.config;

import com.example.tutorial.LEARNING.repository.EmployeeRepo;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories("com.example.tutorial.LEARNING.repository")
public class EmployeeConfig {

    @Bean
    public Class<EmployeeRepo> getEmployee() {
        return EmployeeRepo.class;
    }
}

