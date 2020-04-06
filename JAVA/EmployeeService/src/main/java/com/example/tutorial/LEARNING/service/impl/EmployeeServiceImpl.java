package com.example.tutorial.LEARNING.service.impl;

import com.example.tutorial.LEARNING.models.Employee;
import com.example.tutorial.LEARNING.repository.EmployeeRepo;
import com.example.tutorial.LEARNING.service.EmployeeService;
import com.example.tutorial.LEARNING.utils.EmployeeExceptionHandler;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepo employeeRepo;

    List<Employee> employeeList = new ArrayList<>();

    @Override
    public Employee getEmployeeById(int empId) throws ParseException, NotFoundException {
        Optional<Employee> optionalEmployee = employeeRepo.findById((long) empId);
        if (!optionalEmployee.isPresent()) {
            throw new NotFoundException("Not found for Id " + empId);
        } else return optionalEmployee.get();
    }

    @Override
    public List<Employee> getAllEmployee(String firstName,
                                         String designation) throws Exception {
        List<Employee> employeeList= employeeRepo.findByTitleAndDescription(firstName, designation);
        if(CollectionUtils.isEmpty(employeeList))
            throw new EmployeeExceptionHandler("No Result found for the parameters " +
                    "firstName " + firstName + "and deisgnation " + designation);

        return employeeList;
    }

    @Override
    public Long createEmploye(Employee employee) {
        Employee newEmployee = employeeRepo.save(employee);
        return newEmployee.getId();
    }
}
