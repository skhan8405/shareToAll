package com.example.tutorial.LEARNING.api;

import com.example.tutorial.LEARNING.models.Employee;
import com.example.tutorial.LEARNING.models.TotalEmployeeInfo;
import com.example.tutorial.LEARNING.service.EmployeeService;
import javassist.NotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;

@RestController()
public class EmployeeInfoApi {

    @Autowired
    private EmployeeService employeeService;

    private static final Logger LOGGER = LoggerFactory.getLogger(EmployeeInfoApi.class);

    @GetMapping(value = "/name")
    public String getName() {
        return "Heloo World";
    }

    @GetMapping(value = "/employee/{empId}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public TotalEmployeeInfo getEmpName(@PathVariable("empId") int empId) throws ParseException, NotFoundException {
        LOGGER.info("REQUESTED FOR EMPLOYEE DETAILS for ID " + empId);
        final TotalEmployeeInfo employee =
                employeeService.getEmployeeById(empId);
        return (employee);
    }

@RequestMapping(value = "/employee", method = RequestMethod.GET
,produces = MediaType.APPLICATION_JSON_VALUE)
    public List<TotalEmployeeInfo> getAllEmployee(@RequestParam(required = false) String firstName,
                                                  @RequestParam(required = false) String designation)
            throws Exception {
        return employeeService.getAllEmployee(firstName, designation);

    }

    @PostMapping(value = "/employee")
    public Long createEmployee(@RequestBody Employee bodyPar){
        return employeeService.createEmploye(bodyPar);
    }

    @PutMapping(value="/employee/{id}")
    public Long updateEmployee(@PathVariable(value = "id") Long id,
                @RequestBody final Employee employeeePutBody){
        return employeeService.updateEmployee(id,employeeePutBody);
    }

    @DeleteMapping(value = "/employee/{id}")
    public Employee deleteEmployee(@PathVariable(value = "id") Long id){
        return employeeService.deleteEmployee(id);
    }
}
