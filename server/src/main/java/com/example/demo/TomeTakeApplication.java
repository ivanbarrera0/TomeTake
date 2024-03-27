package com.example.demo;

import com.example.demo.entities.Book;
import com.example.demo.entities.User;
import com.example.demo.service.BookService;
import com.example.demo.service.UserService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class TomeTakeApplication {

	public static void main(String[] args) {

		SpringApplication.run(TomeTakeApplication.class, args);

//		ApplicationContext iocContainer = SpringApplication.run(TomeTakeApplication.class, args);
//
//		UserService userService = iocContainer.getBean(UserService.class);
//		BookService bookService = iocContainer.getBean(BookService.class);
//
//		User user = new User("John", "Password", "John@john.com", null);
//
//		userService.saveOrUpdate(user);
//		System.out.println("User has been saved!");
//
//		System.out.println("Here is the user: ");
//		System.out.println(userService.findUserById(1));
//
//		Book book = new Book("Title", 2, "Author", "Genre", "Description", "1000", user);
//
//		bookService.saveOrUpdate(book);
//
//		System.out.println("Book has been saved!");
//
//		System.out.println("Here is the book: ");
//		System.out.println(bookService.findBookById(1));
	}

}
