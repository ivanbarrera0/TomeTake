package com.example.demo.service;

import com.example.demo.entities.Checkout;
import com.example.demo.repository.BookRepository;
import com.example.demo.repository.CheckoutRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CheckoutService {

    private CheckoutRepository checkoutRepository;
    private BookRepository bookRepository;

    @Autowired
    public CheckoutService(CheckoutRepository checkoutRepository, BookRepository bookRepository) {
        this.checkoutRepository = checkoutRepository;
        this.bookRepository = bookRepository;
    }

    @Transactional
    public Checkout saveCheckout(Checkout checkout) {

        bookRepository.bookCheckedOut(checkout.getBook().getId());

        return checkoutRepository.save(checkout);
    }
}
