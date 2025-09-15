package com.example.ecommerce_microservices;

import org.springframework.boot.SpringApplication;

public class TestEcommerceMicroservicesApplication {

	public static void main(String[] args) {
		SpringApplication.from(EcommerceMicroservicesApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
