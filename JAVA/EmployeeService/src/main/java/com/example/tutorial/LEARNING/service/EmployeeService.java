package com.example.tutorial.LEARNING.service;

import com.example.tutorial.LEARNING.models.Employee;
import javassist.NotFoundException;

import java.text.ParseException;
import java.util.List;

public interface EmployeeService {

    Employee getEmployeeById(int empId) throws ParseException, NotFoundException;

    List<Employee> getAllEmployee(String firstName,
                                  String designation) throws ParseException, NotFoundException, Exception;

    Long createEmploye(Employee employee);

    Long updateEmployee(Long id, Employee employeeePutBody);

    Employee deleteEmployee(Long id);
}
