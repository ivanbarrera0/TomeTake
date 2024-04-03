package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.List;

@Entity(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int id;

    // Make it unique
    @Column
    private String username;

    @Column
    private String email;

    @Column
    private boolean isPublisher;

    @OneToMany(mappedBy = "user", cascade = CascadeType.PERSIST)
    @JsonManagedReference("checkout-user")
    private List<Checkout> checkoutList;

    public User() {
    }

    public User(int id, String username, String email, boolean isPublisher) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.isPublisher = isPublisher;
    }

    public User(String username, String email, boolean isPublisher) {
        this.username = username;
        this.email = email;
        this.isPublisher = isPublisher;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean getIsPublisher() {
        return isPublisher;
    }

    public void setIsPublisher(boolean isPublisher) {
        this.isPublisher = isPublisher;
    }

    public List<Checkout> getCheckoutList() {
        return checkoutList;
    }

    public void setCheckoutList(List<Checkout> checkoutList) {
        this.checkoutList = checkoutList;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", isPublisher=" + isPublisher +
                '}';
    }
}
