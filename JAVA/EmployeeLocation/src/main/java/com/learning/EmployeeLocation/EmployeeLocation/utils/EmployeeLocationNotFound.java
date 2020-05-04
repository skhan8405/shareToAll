package com.learning.EmployeeLocation.EmployeeLocation.utils;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class EmployeeLocationNotFound extends RuntimeException {

    public EmployeeLocationNotFound(final String message) {
        super(message);
    }
}

