package com.example.tutorial.LEARNING.utils;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class EmployeeBadRequestException extends RuntimeException {
    public EmployeeBadRequestException(final String message){
        super(message);
    }
}
