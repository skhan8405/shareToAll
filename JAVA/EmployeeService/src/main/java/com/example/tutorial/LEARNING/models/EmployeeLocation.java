package com.example.tutorial.LEARNING.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class EmployeeLocation {

    public EmployeeLocation(){

    }

    public Long id;

    public String city;

    public String addressLine1;

    public String addressLine2;

    public int pinCode;

    public boolean presentAddressSame;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getAddressLine1() {
        return addressLine1;
    }

    public void setAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
    }

    public String getAddressLine2() {
        return addressLine2;
    }

    public void setAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
    }

    public int getPinCode() {
        return pinCode;
    }

    public void setPinCode(int pinCode) {
        this.pinCode = pinCode;
    }

    public boolean isPresentAddressSame() {
        return presentAddressSame;
    }

    public void setPresentAddressSame(boolean presentAddressSame) {
        this.presentAddressSame = presentAddressSame;
    }
}
