package com.example.tutorial.LEARNING.external;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component()
@ConfigurationProperties(prefix = "external")
public class ConnectionConfig {

    public String locationEndPoint;

    public String getLocationEndPoint() {
        return locationEndPoint;
    }

    public void setLocationEndPoint(String locationEndPoint){
        this.locationEndPoint=locationEndPoint;
    }

}
