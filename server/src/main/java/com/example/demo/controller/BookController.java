package com.example.demo.controller;

import com.example.demo.entities.Book;
import com.example.demo.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class BookController {

    private BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @PostMapping(path = "/addBook")
    @ResponseStatus(HttpStatus.OK)
    public Book addBook(@RequestBody Book book) {
        return bookService.saveOrUpdate(book);
    }

    // Get via genre
    @GetMapping(path = "/retrieveBooks")
    @ResponseStatus(HttpStatus.OK)
    public List<Book> retrieveListofBooks(@RequestParam String genre) {
        return bookService.listOfBooksByGenre(genre);
    }

    @GetMapping(path = "/retrieveCheckedOutBooks")
    @ResponseStatus(HttpStatus.OK)
    public List<Book> retrieveListOfCheckedOutBooks(@RequestParam int id) {
        return bookService.retrieveCheckedOutBooksByUserId(id);
    }
}
