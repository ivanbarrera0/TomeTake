package com.example.demo.repository;

import com.example.demo.entities.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer> {

    @Query
    public Book findBookById(int id);

    @Query(value = "SELECT * FROM books WHERE genre = ?1", nativeQuery = true)
    public List<Book> findBookByGenre(String genre);

    @Query(value = "SELECT * FROM books WHERE title LIKE %:keyword%", nativeQuery = true)
    public List<Book> findBookByKeyword(@Param("keyword") String keyword);

    @Query(value = "SELECT * FROM books WHERE title LIKE %:keyword% AND genre = :genre", nativeQuery = true)
    public List<Book> findBookByKeywordAndGenre(@Param("keyword") String keyword, @Param("genre") String genre);

    @Query(value = "SELECT books.* FROM books " +
            "JOIN checkout ON books.book_id = checkout.book_id " +
            "JOIN users ON checkout.user_id = users.user_id " +
            "WHERE users.user_id = ?1", nativeQuery = true)
    public List<Book> retrieveCheckedOutBooksByUserId(int id);
}
