package com.learning.EmployeeLocation.EmployeeLocation.service;

import com.learning.EmployeeLocation.EmployeeLocation.model.EmployeeLocation;
import org.springframework.stereotype.Service;

import java.util.List;

public interface EmployeeLocationService {

    List<EmployeeLocation> getAllEmployeeLocationByCity(String city);

    EmployeeLocation getEmployeeLocationById(Long id);

    Long createEmployee(EmployeeLocation employeeLocation);

    EmployeeLocation updateEmployeeLocation(Long id, EmployeeLocation employeeUpdateLocation);

    EmployeeLocation deleteEmployeeLocation(Long id);
}
