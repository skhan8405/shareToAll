package com.learning.EmployeeLocation.EmployeeLocation.api;

import com.learning.EmployeeLocation.EmployeeLocation.model.EmployeeLocation;
import com.learning.EmployeeLocation.EmployeeLocation.service.EmployeeLocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping(value="employee/location")
public class EmployeeLocationApi {

    @Autowired()
    private EmployeeLocationService employeeLocationService;

    @GetMapping()
    public List<EmployeeLocation> getAllEmployeeLocation(@RequestParam(value = "city", required = false) String city){
    return employeeLocationService.getAllEmployeeLocationByCity(city);
    }

    @GetMapping(value="/{empId}")
    public EmployeeLocation getEmployeeLocationById(@PathVariable("empId") Long id){
    return employeeLocationService.getEmployeeLocationById(id);
    }

    @PostMapping()
    public Long createEmployee(@RequestBody EmployeeLocation employeeLocation){
        return employeeLocationService.createEmployee(employeeLocation);

    }

    @PutMapping(value = "/{empId}")
    public EmployeeLocation updateEmployeeLocation(@PathVariable("empId") Long empId,
                                                   @RequestBody EmployeeLocation employeeUpdateLocation){
        return employeeLocationService.updateEmployeeLocation(empId, employeeUpdateLocation);

    }

    @DeleteMapping(value = "/{empId}")
    public EmployeeLocation deleteEmployeeLocation(@PathVariable("empId") Long empId){
        return employeeLocationService.deleteEmployeeLocation(empId);
    }
}
