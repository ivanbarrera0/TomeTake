package com.example.demo.service;

import com.example.demo.entities.Checkout;
import com.example.demo.repository.CheckoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CheckoutService {

    private CheckoutRepository checkoutRepository;

    @Autowired
    public CheckoutService(CheckoutRepository checkoutRepository) {
        this.checkoutRepository = checkoutRepository;
    }

    public Checkout saveCheckout(Checkout checkout) {
        return checkoutRepository.save(checkout);
    }
}
