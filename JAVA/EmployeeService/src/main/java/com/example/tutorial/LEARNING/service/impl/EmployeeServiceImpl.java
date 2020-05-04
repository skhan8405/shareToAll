package com.example.tutorial.LEARNING.service.impl;

import com.example.tutorial.LEARNING.external.ConnectionConfig;
import com.example.tutorial.LEARNING.external.ExternalEmployeeLocation;
import com.example.tutorial.LEARNING.models.Employee;
import com.example.tutorial.LEARNING.models.EmployeeLocation;
import com.example.tutorial.LEARNING.models.TotalEmployeeInfo;
import com.example.tutorial.LEARNING.repository.EmployeeRepo;
import com.example.tutorial.LEARNING.service.EmployeeService;
import com.example.tutorial.LEARNING.utils.EmployeeBadRequestException;
import com.example.tutorial.LEARNING.utils.EmployeeNotFoundException;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepo employeeRepo;

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private ConnectionConfig connectionConfig;
    
    @Autowired
    private ExternalEmployeeLocation externalEmployeeLocation;

    private List<EmployeeLocation> employeeLocationList;

    @Override
    public TotalEmployeeInfo getEmployeeById(int empId) throws NotFoundException {
        Optional<Employee> employee = employeeRepo.findById((long) empId);
        if (!employee.isPresent()) {
            throw new EmployeeNotFoundException("Not found for Id " + empId);
        } else {
            TotalEmployeeInfo totalEmployeeInfo=new TotalEmployeeInfo();
            totalEmployeeInfo.setEmployee(employee.get());
            totalEmployeeInfo.setEmployeeLocation(
                    getEmployeeLocationDetailsById(employee.get().getId())
            );
            return totalEmployeeInfo;

        }
    }

    private EmployeeLocation getEmployeeLocationDetailsById(Long id) {
        return externalEmployeeLocation.getEmployeeLocationById(id);
    }

    @Override
    public List<TotalEmployeeInfo> getAllEmployee(String firstName,
                                         String designation) {
        callEmployeeLocationServiceOnce();
        List<TotalEmployeeInfo> totalEmployeeInfoList=new ArrayList<>();
        List<Employee> employeeList= employeeRepo.findByfirstNameAndDesignation(firstName, designation);
        if(CollectionUtils.isEmpty(employeeList)){
            throw new EmployeeNotFoundException("No Result found for the parameters " +
                    "firstName " + firstName + " and deisgnation " + designation);
        }
        employeeList.stream().forEach(employee->{
            EmployeeLocation employeeLocation=
                    getEmployeeLocationDetails(employee.getId());
            if(!Objects.isNull(employeeLocation)){
                TotalEmployeeInfo totalEmployeeInfo=new TotalEmployeeInfo();
                totalEmployeeInfo.setEmployee(employee);
                totalEmployeeInfo.setEmployeeLocation(employeeLocation);
                totalEmployeeInfoList.add(totalEmployeeInfo);
            }
        });
        return totalEmployeeInfoList;
    }

    private void callEmployeeLocationServiceOnce() {
        employeeLocationList= 
                externalEmployeeLocation.getEmployeeLocationViaExternal();
        
    }

    private EmployeeLocation getEmployeeLocationDetails(Long id) {
        EmployeeLocation returnValue=null;
        if(!CollectionUtils.isEmpty(employeeLocationList)){
            for (EmployeeLocation employeeLocation : employeeLocationList) {
                if(employeeLocation.getId().equals(id)){
                    returnValue= employeeLocation;
                }
            }
        }
        return returnValue;
    }

    @Override
    public Long createEmploye(Employee employee) {
        checkForBadRequest(employee);
        Employee newEmployee = employeeRepo.save(employee);
        return newEmployee.getId();
    }

    @Override
    public Long updateEmployee(Long id, Employee employeeePutBody) {
        createEmploye(employeeePutBody);
        return employeeRepo.findById(id).map(employee -> {
            employee.setFirstName(employeeePutBody.getFirstName());
            employee.setLastName(employeeePutBody.getLastName());
            employee.setLateral(employeeePutBody.getLateral());
            employee.setId(employee.getId());//keeping the id in the dB as same
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
                    "NOT FOUND with id " + id);
        }
        employeeRepo.deleteById(id);
        return employeeToBeDeleted.get();
    }

    private void checkForBadRequest(Employee employee){
        if(employee.getDesignation()== null || employee.getFirstName() == null){
            throw new EmployeeBadRequestException("BAD Request ENCOUNTERED, " +
                    "Either Employee FirstName or Designation Not PRESENT");
        }
        if(employee.getDateOfBirth().after(new Date())){
            throw new EmployeeBadRequestException("Date Of Birth Invalid " + employee.getDateOfBirth());
        }
    }
}
