package com.example.demo.controller;

import com.example.demo.entities.Book;
import com.example.demo.exception.InvalidImageException;
import com.example.demo.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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
    public Book addBook(@RequestParam String title, @RequestParam int quantity, @RequestParam int numberOfPages,
                        @RequestParam String author, @RequestParam String genre, @RequestParam String description,
                        @RequestParam String publicationYear, @RequestParam String imageType,
                        @RequestBody MultipartFile image) throws InvalidImageException {

        try {

            Book book = new Book();
            book.setTitle(title);
            book.setQuantity(quantity);
            book.setAuthor(author);
            book.setDescription(description);
            book.setGenre(genre);
            book.setNumberOfPages(numberOfPages);
            book.setPublicationYear(publicationYear);
            book.setImageType(imageType);
            book.setImage(image.getBytes());

            return bookService.saveOrUpdate(book);

        } catch(IOException e) {
            throw new InvalidImageException("Invalid Image");
        }
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

    @ExceptionHandler(InvalidImageException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public String exceptionHandler(InvalidImageException e) {return e.getMessage();}
}
