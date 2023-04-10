package com.example.demoforshazam;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

import com.example.demoforshazam.service.CorsConfig;


@SpringBootApplication
@Import(CorsConfig.class)
public class DemoForShazamApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoForShazamApplication.class, args);
    
    }

    
}
