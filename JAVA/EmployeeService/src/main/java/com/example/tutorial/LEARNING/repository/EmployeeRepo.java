package com.example.tutorial.LEARNING.repository;

import com.example.tutorial.LEARNING.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Long> {

    @Query(
            value = "SELECT * FROM employee t where (:firstName is null or t.first_name = :firstName) AND " +
                    "(:designation is null or t.designation = :designation)",
            nativeQuery=true
    )
    List<Employee> findByTitleAndDescription(@Param("firstName") String firstName,
                                             @Param("designation") String designation);

}
