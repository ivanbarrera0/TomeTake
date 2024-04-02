package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity(name = "checkout")
public class Checkout {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonBackReference("checkout-user")
    private User user;

    @ManyToOne
    @JoinColumn(name = "book_id")
    @JsonBackReference("checkout-book")
    private Book book;

    public Checkout() {
    }

    public Checkout(int id, User user, Book book) {
        this.id = id;
        this.user = user;
        this.book = book;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }
}
