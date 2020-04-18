package com.learning.EmployeeLocation.EmployeeLocation.model;

import lombok.Data;

import javax.persistence.*;

@Entity()
@Data()
public class EmployeeLocation {

    public EmployeeLocation(){

    }
    @Id()
    @GeneratedValue(strategy= GenerationType.AUTO)
    public Long id;

    public String city;

    public String addressLine1;

    public String addressLine2;

    public int pinCode;

    public boolean presentAddressSame;
}
