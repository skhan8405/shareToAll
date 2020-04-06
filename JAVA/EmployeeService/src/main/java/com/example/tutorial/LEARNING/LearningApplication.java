package com.example.tutorial.LEARNING;

import com.example.tutorial.LEARNING.repository.EmployeeRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
//@EnableJpaRepositories(basePackageClasses= {LearningApplication.class})
public class LearningApplication {

    public static void main(String[] args) {
        SpringApplication.run(LearningApplication.class, args);
    }

//    @Bean()
//    public Class<EmployeeRepo> getEmployee(){
//        return EmployeeRepo.class;
//    }

//    @Bean
//    public CommandLineRunner demo(EmployeeRepo repository) {
//        return (args -> {
//            repository.findAll();
//        });
    //}
   }
