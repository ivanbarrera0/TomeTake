package com.example.demo.controller;

import com.example.demo.entities.Book;
import com.example.demo.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class BookController {

    private BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @PostMapping(path = "/register/book")
    @ResponseStatus(HttpStatus.OK)
    public Book registerBook(@RequestBody Book book) {
        return bookService.saveOrUpdate(book);
    }
}
