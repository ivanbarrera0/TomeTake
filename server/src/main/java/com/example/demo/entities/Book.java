package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.Arrays;
import java.util.List;
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
    private int numberOfPages;

    @Column
    private String author;

    @Column
    private String genre;

    @Column
    private String description;

    @Column
    private String publicationYear;

    @Column
    private String imageType;

    @Lob
    private byte[] image;

    @OneToMany(mappedBy = "book", cascade = CascadeType.PERSIST)
    @JsonManagedReference("checkout-book")
    private List<Checkout> checkoutList;

    // Can work to add the image of a book later

    public Book() {
    }

    public Book(String title, int quantity, int numberOfPages, String author, String genre, String description, String publicationYear, String imageType, byte[] image) {
        this.title = title;
        this.quantity = quantity;
        this.numberOfPages = numberOfPages;
        this.author = author;
        this.genre = genre;
        this.description = description;
        this.publicationYear = publicationYear;
        this.imageType = imageType;
        this.image = image;
    }

    public Book(String title, int quantity, int numberOfPages, String author, String genre, String description, String publicationYear, String imageType,  byte[] image, List<Checkout> checkoutList) {
        this.title = title;
        this.quantity = quantity;
        this.numberOfPages = numberOfPages;
        this.author = author;
        this.genre = genre;
        this.description = description;
        this.publicationYear = publicationYear;
        this.imageType = imageType;
        this.image = image;
        this.checkoutList = checkoutList;
    }

    public Book(int id, String title, int quantity, int numberOfPages, String author, String genre, String description, String publicationYear, String imageType, byte[] image) {
        this.id = id;
        this.title = title;
        this.quantity = quantity;
        this.numberOfPages = numberOfPages;
        this.author = author;
        this.genre = genre;
        this.description = description;
        this.publicationYear = publicationYear;
        this.imageType = imageType;
        this.image = image;
    }

    public Book(int id, String title, int quantity, int numberOfPages, String author, String genre, String description, String publicationYear, String imageType, byte[] image, List<Checkout> checkoutList) {
        this.id = id;
        this.title = title;
        this.quantity = quantity;
        this.numberOfPages = numberOfPages;
        this.author = author;
        this.genre = genre;
        this.description = description;
        this.publicationYear = publicationYear;
        this.checkoutList = checkoutList;
        this.imageType = imageType;
        this.image = image;
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

    public int getNumberOfPages() {
        return numberOfPages;
    }

    public void setNumberOfPages(int numberOfPages) {
        this.numberOfPages = numberOfPages;
    }

    public String getImageType() {
        return imageType;
    }

    public void setImageType(String imageType) {
        this.imageType = imageType;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public List<Checkout> getCheckoutList() {
        return checkoutList;
    }

    public void setCheckoutList(List<Checkout> checkoutList) {
        this.checkoutList = checkoutList;
    }

    // It would be a good step to check that books do not have the same title and author
    // instead of checking for all attributes


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Book book = (Book) o;
        return id == book.id && quantity == book.quantity && numberOfPages == book.numberOfPages && Objects.equals(title, book.title) && Objects.equals(author, book.author) && Objects.equals(genre, book.genre) && Objects.equals(description, book.description) && Objects.equals(publicationYear, book.publicationYear) && Objects.equals(imageType, book.imageType) && Arrays.equals(image, book.image) && Objects.equals(checkoutList, book.checkoutList);
    }

    @Override
    public int hashCode() {
        int result = Objects.hash(id, title, quantity, numberOfPages, author, genre, description, publicationYear, imageType, checkoutList);
        result = 31 * result + Arrays.hashCode(image);
        return result;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", quantity=" + quantity +
                ", numberOfPages=" + numberOfPages +
                ", author='" + author + '\'' +
                ", genre='" + genre + '\'' +
                ", description='" + description + '\'' +
                ", publicationYear='" + publicationYear + '\'' +
                ", imageType='" + imageType + '\'' +
                ", image=" + Arrays.toString(image) +
                ", checkoutList=" + checkoutList +
                '}';
    }
}
