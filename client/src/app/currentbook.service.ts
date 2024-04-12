import { Injectable } from '@angular/core';
import { Book } from './remote.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentbookService {

  id?:number;
  title:string;
  author:string;
  genre:string;
  description:string;
  publicationYear:string;
  quantity:number;
  numberOfPages:number;

  constructor() { 
    this.id = 0;
    this.title = "";
    this.author = "";
    this.genre = "";
    this.description = "";
    this.publicationYear = "";
    this.quantity = 0;
    this.numberOfPages = 0;
  }

  setCurrentBook(book:Book) {
    this.id = book.id;
    this.title = book.title;
    this.author = book.author;
    this.genre = book.genre;
    this.description = book.description;
    this.publicationYear = book.publicationYear;
    this.quantity = book.quantity;
    this.numberOfPages = book.numberOfPages;
  }

  getCurrentBook() : Book {

    let book:Book = {
      id: this.id,
      title: this.title,
      author: this.author,
      genre: this.genre,
      description: this.description,
      publicationYear: this.publicationYear,
      quantity: this.quantity,
      numberOfPages: this.numberOfPages
    }

    return book;
  }
}
