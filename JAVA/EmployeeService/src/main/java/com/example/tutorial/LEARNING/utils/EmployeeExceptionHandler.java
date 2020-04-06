package com.example.tutorial.LEARNING.utils;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class EmployeeExceptionHandler extends RuntimeException {

    public EmployeeExceptionHandler(final String message){
    super(message);
        }
}
