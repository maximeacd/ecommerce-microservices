package com.example.order_service.consumer;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class OrderEventConsumer {

    @KafkaListener(topics = "order-events", groupId = "order-group")
    public void consume(String message){
        System.out.println("Received Kafka message: "+message);
    }
}
