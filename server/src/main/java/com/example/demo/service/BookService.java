package com.example.demo.service;

import com.example.demo.entities.Book;
import com.example.demo.exception.InvalidImageException;
import com.example.demo.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Base64;
import java.util.List;

@Service
public class BookService {

    private BookRepository bookRepository;

    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public Book saveOrUpdate(Book book) {

        return bookRepository.save(book);
    }

    public Book findBookById(int id) {
        return bookRepository.findBookById(id);
    }

    public List<Book> listOfBooksByGenre(String genre) {
        return bookRepository.findBookByGenre(genre);
    }

    public List<Book> retrieveCheckedOutBooksByUserId(int id) {
        return bookRepository.retrieveCheckedOutBooksByUserId(id);
    }
}
