package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.util.Objects;

@Entity(name = "books")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "book_id")
    private int id;

    @Column
    private String title;

    @Column
    private int quantity;

    @Column
    private String author;

    @Column
    private String genre;

    @Column
    private String description;

    @Column
    private String publicationYear;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @JsonBackReference
    private User user;

    // Can work to add the image of a book later
    // Need to set the user of the book


    public Book() {
    }

    public Book(String title, int quantity, String author, String genre, String description, String publicationYear) {
        this.title = title;
        this.quantity = quantity;
        this.author = author;
        this.genre = genre;
        this.description = description;
        this.publicationYear = publicationYear;
    }

    public Book(int id, String title, int quantity, String author, String genre, String description, String publicationYear) {
        this.id = id;
        this.title = title;
        this.quantity = quantity;
        this.author = author;
        this.genre = genre;
        this.description = description;
        this.publicationYear = publicationYear;
    }

    public Book(String title, int quantity, String author, String genre, String description, String publicationYear, User user) {
        this.title = title;
        this.quantity = quantity;
        this.author = author;
        this.genre = genre;
        this.description = description;
        this.publicationYear = publicationYear;
        this.user = user;
    }

    public Book(int id, String title, int quantity, String author, String genre, String description, String publicationYear, User user) {
        this.id = id;
        this.title = title;
        this.quantity = quantity;
        this.author = author;
        this.genre = genre;
        this.description = description;
        this.publicationYear = publicationYear;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPublicationYear() {
        return publicationYear;
    }

    public void setPublicationYear(String publicationYear) {
        this.publicationYear = publicationYear;
    }

    // It would be a good step to check that books do not have the same title and author
    // instead of checking for all attributes
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Book book = (Book) o;
        return id == book.id && quantity == book.quantity && Objects.equals(title, book.title) && Objects.equals(author, book.author) && Objects.equals(genre, book.genre) && Objects.equals(description, book.description) && Objects.equals(publicationYear, book.publicationYear);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, quantity, author, genre, description, publicationYear);
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", quantity=" + quantity +
                ", author='" + author + '\'' +
                ", genre='" + genre + '\'' +
                ", description='" + description + '\'' +
                ", publicationYear='" + publicationYear + '\'' +
                ", user=" + user +
                '}';
    }
}
