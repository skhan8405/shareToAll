package com.learning.EmployeeLocation.EmployeeLocation.service.impl;

import com.learning.EmployeeLocation.EmployeeLocation.model.EmployeeLocation;
import com.learning.EmployeeLocation.EmployeeLocation.repository.EmployeeLocationRepo;
import com.learning.EmployeeLocation.EmployeeLocation.service.EmployeeLocationService;
import com.learning.EmployeeLocation.EmployeeLocation.utils.EmployeeLocationNotFound;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class EmployeeLocationServiceImpl implements EmployeeLocationService {

    @Autowired()
    private EmployeeLocationRepo employeeLocationRepo;

    @Override
    public List<EmployeeLocation> getAllEmployeeLocationByCity(String city) {
        return employeeLocationRepo.getAllEmployeeLocationByCity(city);
    }

    @Override
    public EmployeeLocation getEmployeeLocationById(Long id) {
        Optional<EmployeeLocation> employeeLocation=
                employeeLocationRepo.findById(id);
        if(employeeLocation.isPresent())
        return employeeLocationRepo.findById(id).get();
        else
        throw new EmployeeLocationNotFound("Resource not found for " +
                "id = "+ id);
    }

    @Override
    public Long createEmployee(EmployeeLocation employeeLocation) {
        EmployeeLocation savedEmployee = employeeLocationRepo.save(employeeLocation);
        return savedEmployee.id;
    }

    @Override
    public EmployeeLocation updateEmployeeLocation(Long id, EmployeeLocation employeeUpdateLocation) {
        EmployeeLocation employeeLocation= employeeLocationRepo.getOne(id);
        if(Objects.isNull(employeeLocation)){
            throw new EmployeeLocationNotFound("Employee Location" +
                    " Not Found For resource having ID : " + id);
        }
        EmployeeLocation employeeLocationToBeUpdated= new
                EmployeeLocation();
        employeeLocationToBeUpdated.setId(id);
        employeeLocationToBeUpdated.setAddressLine1(employeeLocation.addressLine1);
        employeeLocationToBeUpdated.setAddressLine2(employeeLocation.addressLine2);
        employeeLocationToBeUpdated.setCity(employeeLocation.city);
        employeeLocationToBeUpdated.setPinCode(employeeLocation.pinCode);
        employeeLocationToBeUpdated.setPresentAddressSame(employeeLocation.presentAddressSame);
        return employeeLocation;
    }

    @Override
    public EmployeeLocation deleteEmployeeLocation(Long id) {
        Optional<EmployeeLocation> employeeLocation= employeeLocationRepo.findById(id);
        if(!employeeLocation.isPresent()){
            throw new EmployeeLocationNotFound("Employee Location" +
                    " Not Found For resource having ID : " + id);
        }
         employeeLocationRepo.deleteById(id);
        return employeeLocation.get();
    }
}
