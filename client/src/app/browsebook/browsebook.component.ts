import { Component } from '@angular/core';
import { Book, RemoteService } from '../remote.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CurrentbookService } from '../currentbook.service';

@Component({
  selector: 'app-browsebook',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule, CommonModule],
  templateUrl: './browsebook.component.html',
  styleUrl: './browsebook.component.css'
})
export class BrowsebookComponent {

  bookList:Book[];
  remote:RemoteService;
  currentBook:CurrentbookService;
  genre:string;
  keyword:string;
  hasBeenClicked:boolean;

  constructor(remote:RemoteService, currentBook:CurrentbookService) {
    this.bookList = [];
    this.remote = remote;
    this.genre = "";
    this.keyword = "";
    this.hasBeenClicked = false;
    this.currentBook = currentBook;
  }

  retrieveBooks() {

    this.hasBeenClicked = true;

    // Change to the opposite so it makes sense

    if(this.genre !== "" && this.keyword !== "") {
      this.remote.retrieveBooksByKeywordAndGenre(this.keyword, this.genre)
      .subscribe({
        next: (data) => {
          this.bookList = data;
          console.log(this.bookList);
        },
        error: (error:HttpErrorResponse) => {
          alert("Could not retrieve books...");
          console.log(error);
        }
      })
    } else if(this.keyword === "") {
      this.remote.retrieveBooksByGenre(this.genre)
      .subscribe({
        next: (data) => {
          this.bookList = data;
          console.log(this.bookList);
        },
        error: (error: HttpErrorResponse) => {
          alert("Could not retrieve books...")
          console.log(error);
        }
      })
    } else {
      this.remote.retrieveBooksByKeyword(this.keyword)
      .subscribe({
        next: (data) => {
          this.bookList = data;
          console.log(this.bookList);
        },
        error: (error:HttpErrorResponse) => {
          alert("Could not retrieve books...");
          console.log(error);
        }
      })
    }   
  }

  showBookView(book:Book) {
    this.currentBook.setCurrentBook(book);
    this.remote.redirect('/bookview');
  }
}
