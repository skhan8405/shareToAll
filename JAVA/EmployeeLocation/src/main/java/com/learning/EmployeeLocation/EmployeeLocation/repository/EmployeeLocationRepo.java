package com.learning.EmployeeLocation.EmployeeLocation.repository;

import com.learning.EmployeeLocation.EmployeeLocation.model.EmployeeLocation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface EmployeeLocationRepo extends JpaRepository<EmployeeLocation, Long> {

    @Query(value = "Select * from employee_location t where " +
            "(:city is null or t.city = :city)", nativeQuery = true)
    List<EmployeeLocation> getAllEmployeeLocationByCity(
            @Param("city") String city
    );
}
