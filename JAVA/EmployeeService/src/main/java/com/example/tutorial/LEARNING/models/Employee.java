package com.example.tutorial.LEARNING.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jdk.nashorn.internal.objects.annotations.Getter;
import jdk.nashorn.internal.objects.annotations.Setter;
import org.hibernate.annotations.Columns;

import javax.persistence.Id;
import javax.persistence.*;
import java.util.Date;


@Entity
//@Table(name = "employeeTable")
public class Employee {

    public Employee() {

    }

    @Id
    @Column(name = "id", unique = true, nullable = false)
    @GeneratedValue(strategy= GenerationType.AUTO)
    @JsonProperty("id")
    private Long id;

    @Column(name = "firstName")
    public String firstName;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "isLateral")
    private Boolean isLateral;

    @Column(name = "designation")
    private String designation;

    @Column(name = "dateOfBirth")
    private Date dateOfBirth;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Boolean getLateral() {
        return isLateral;
    }

    public void setLateral(Boolean lateral) {
        isLateral = lateral;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }
}
