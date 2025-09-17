package com.example.order_service.service;

import com.example.order_service.entity.Order;
import com.example.order_service.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final KafkaTemplate<String, String> kafkaTemplate;

    private static final String TOPIC = "order-events";

    public Order createOrder(Order order){
        order.setCreatedAt(LocalDateTime.now());
        Order savedOrder = orderRepository.save(order);
        String message="Order created: "+savedOrder.getId()+": "+savedOrder.getProductId()+": "+savedOrder.getQuantity();
        kafkaTemplate.send(TOPIC,message);
        return savedOrder;
    }

    public List<Order> getAllOrders(){
        return orderRepository.findAll();
    }

    public Order getOrderById(Long id){
        return orderRepository.findById(id).orElseThrow(()->new RuntimeException("Order not found"));
    }
}
