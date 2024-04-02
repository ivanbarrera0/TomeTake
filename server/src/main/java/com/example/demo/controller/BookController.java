package com.example.demo.controller;

import com.example.demo.entities.Book;
import com.example.demo.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
//@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
@CrossOrigin
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
}
