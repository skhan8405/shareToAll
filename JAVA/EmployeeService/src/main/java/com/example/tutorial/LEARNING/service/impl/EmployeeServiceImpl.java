package com.example.tutorial.LEARNING.service.impl;

import com.example.tutorial.LEARNING.models.Employee;
import com.example.tutorial.LEARNING.repository.EmployeeRepo;
import com.example.tutorial.LEARNING.service.EmployeeService;
import com.example.tutorial.LEARNING.utils.EmployeeNotFoundException;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepo employeeRepo;


    @Override
    public Employee getEmployeeById(int empId) throws NotFoundException {
        Optional<Employee> optionalEmployee = employeeRepo.findById((long) empId);
        if (!optionalEmployee.isPresent()) {
            throw new EmployeeNotFoundException("Not found for Id " + empId);
        } else return optionalEmployee.get();
    }

    @Override
    public List<Employee> getAllEmployee(String firstName,
                                         String designation) {
        List<Employee> employeeList= employeeRepo.findByTitleAndDescription(firstName, designation);
        if(CollectionUtils.isEmpty(employeeList))
            throw new EmployeeNotFoundException("No Result found for the parameters " +
                    "firstName " + firstName + "and deisgnation " + designation);

        return employeeList;
    }

    @Override
    public Long createEmploye(Employee employee) {
        Employee newEmployee = employeeRepo.save(employee);
        return newEmployee.getId();
    }

    @Override
    public Long updateEmployee(Long id, Employee employeeePutBody) {
        return employeeRepo.findById(id).map(employee -> {
            employee.setFirstName(employeeePutBody.getFirstName());
            employee.setLastName(employeeePutBody.getLastName());
            employee.setLateral(employeeePutBody.getLateral());
            employee.setId(employeeePutBody.getId());
            employee.setDesignation(employeeePutBody.getDesignation());
            employee.setDateOfBirth(employeeePutBody.getDateOfBirth());
            return employeeRepo.save(employee).getId();
        }).orElseGet(() -> employeeRepo.save(employeeePutBody).getId());
    }

    @Override
    public Employee deleteEmployee(Long id) {
        Optional<Employee> employeeToBeDeleted= employeeRepo.findById(id);
        if(!employeeToBeDeleted.isPresent()){
            throw new EmployeeNotFoundException("Resource to be deleted " +
                    "NOT FOUND");
        }
        employeeRepo.deleteById(id);
        return employeeToBeDeleted.get();
    }
}
