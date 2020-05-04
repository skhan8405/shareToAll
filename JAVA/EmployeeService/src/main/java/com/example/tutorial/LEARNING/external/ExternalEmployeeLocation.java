package com.example.tutorial.LEARNING.external;

import com.example.tutorial.LEARNING.models.EmployeeLocation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Service
public class ExternalEmployeeLocation {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private ConnectionConfig connectionConfig;

    private static final Logger LOGGER = LoggerFactory.getLogger(ExternalEmployeeLocation.class);


    public List<EmployeeLocation> getEmployeeLocationViaExternal() {
        ResponseEntity<List<EmployeeLocation>> empployeeLocationRepsonse=null;
        try {
            empployeeLocationRepsonse = restTemplate.exchange(
                    connectionConfig.getLocationEndPoint(),
                    HttpMethod.GET,
                    null,
                    new ParameterizedTypeReference<List<EmployeeLocation>>() {
                    });
        } catch (RestClientException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            System.out.println(empployeeLocationRepsonse);
        }
        if (empployeeLocationRepsonse != null && empployeeLocationRepsonse.hasBody()) {
            LOGGER.info("SuccessFully get employee Location "  + empployeeLocationRepsonse.getBody());
            return empployeeLocationRepsonse.getBody();
        }
        else if(empployeeLocationRepsonse.getStatusCode().is5xxServerError()){
            LOGGER.error("Internal Server Error happened");
        }
        else if(empployeeLocationRepsonse.getStatusCode().is4xxClientError()){
            LOGGER.error("Bad Request Happened");
        }
        return new ArrayList<>();
    }

    public EmployeeLocation getEmployeeLocationById(Long id){
        ResponseEntity<EmployeeLocation> empployeeLocationRepsonse = restTemplate.exchange(
                connectionConfig.getLocationEndPoint()+"/"+id,
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<EmployeeLocation>() {
                });
        if (empployeeLocationRepsonse != null && empployeeLocationRepsonse.hasBody()) {
            LOGGER.info("SuccessFully get employee Location "  + empployeeLocationRepsonse.getBody());
            return empployeeLocationRepsonse.getBody();
        }
        else if(empployeeLocationRepsonse.getStatusCode().is5xxServerError()){
            LOGGER.error("Internal Server Error happened");
        }
        else if(empployeeLocationRepsonse.getStatusCode().is4xxClientError()){
            LOGGER.error("Bad Request Happened");
        }
        return new EmployeeLocation();
    }
}
