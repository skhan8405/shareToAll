package com.example.tutorial.LEARNING.api;

import com.example.tutorial.LEARNING.models.Employee;
import com.example.tutorial.LEARNING.service.EmployeeService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;

@RestController()
public class SimpleController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping(value = "/name")
    public String getName() {
        return "Heloo World";
    }

    @GetMapping(value = "/employee/{empId}")
    public Employee getEmpName(@PathVariable("empId") int empId) throws ParseException, NotFoundException {
        final Employee employee =
                employeeService.getEmployeeById(empId);
        return (employee);
    }

    @GetMapping(value = "/employees")
    public List<Employee> getAllEmployee(@RequestParam(required = false) String firstName,
                                         @RequestParam(required = false) String designation)
            throws Exception {
        System.out.println("firstName "+ firstName);
        System.out.println("designation "+ designation);
        return employeeService.getAllEmployee(firstName, designation);

    }

    @PostMapping(value = "/employees")
    public Long createEmployee(@RequestBody Employee bodyPar){
        return employeeService.createEmploye(bodyPar);
    }
}
