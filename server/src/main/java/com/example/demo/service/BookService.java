package com.example.demo.service;

import com.example.demo.entities.Book;
import com.example.demo.exception.InvalidBookException;
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

    public Book saveOrUpdate(Book book) throws InvalidBookException {

        if(book.getTitle() == null || book.getTitle().length() > 255) {
            throw new InvalidBookException("Title is invalid!");
        } else if(book.getAuthor() == null || book.getAuthor().length() > 255) {
            throw new InvalidBookException("Author is invalid!");
        } else if(book.getGenre() == null || book.getGenre().length() > 255) {
            throw new InvalidBookException("Genre is invalid!");
        } else if(book.getDescription() == null || book.getDescription().length() > 255) {
            throw new InvalidBookException("Description is invalid!");
        } else if(book.getPublicationYear() == null || !book.getPublicationYear().matches("[0-9]+")) {
            throw new InvalidBookException("Publication Year is invalid!");
        } else if(book.getImageType() == null || book.getImageType().length() > 255) {
            throw new InvalidBookException("Image Type is invalid!");
        } else if(book.getNumberOfPages() <= 0) {
            throw new InvalidBookException("Number of pages is invalid!");
        } else if(book.getQuantity() <= 0) {
            throw new InvalidBookException("Quantity is invalid!");
        }

        return bookRepository.save(book);
    }

    public Book findBookById(int id) {
        return bookRepository.findBookById(id);
    }

    public List<Book> listOfBooksByGenre(String genre) {
        return bookRepository.findBookByGenre(genre);
    }

    public List<Book> listOfBooksByKeyword(String keyword) {
        return bookRepository.findBookByKeyword(keyword);
    }

    public List<Book> listofBooksByKeywordAndGenre(String keyword, String genre) {
        return bookRepository.findBookByKeywordAndGenre(keyword, genre);
    }

    public List<Book> retrieveCheckedOutBooksByUserId(int id) {
        return bookRepository.retrieveCheckedOutBooksByUserId(id);
    }
}
