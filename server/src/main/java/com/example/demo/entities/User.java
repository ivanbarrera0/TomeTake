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
    private String password;

    @Column
    private String email;

    @OneToMany(mappedBy = "user", cascade = CascadeType.PERSIST)
    @JsonManagedReference
    private List<Book> checkoutList;

    public User() {
    }

    public User(String username, String password, String email, List<Book> checkoutList) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.checkoutList = checkoutList;
    }

    public User(int id, String username, String password, String email, List<Book> checkoutList) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.checkoutList = checkoutList;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Book> getCheckoutList() {
        return checkoutList;
    }

    public void setCheckoutList(List<Book> checkoutList) {
        this.checkoutList = checkoutList;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
