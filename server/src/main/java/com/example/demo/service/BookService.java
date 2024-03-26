package com.example.demo.service;

import com.example.demo.entities.Book;
import com.example.demo.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {

    private BookRepository bookRepository;

    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void saveOrUpdate(Book book) {
        bookRepository.save(book);
    }

    public Book findBookById(int id) {
        return bookRepository.findBookById(id);
    }
}
