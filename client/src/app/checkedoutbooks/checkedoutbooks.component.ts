import { Component } from '@angular/core';
import { Book, RemoteService } from '../remote.service';
import { CurrentuserService } from '../currentuser.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkedoutbooks',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './checkedoutbooks.component.html',
  styleUrl: './checkedoutbooks.component.css'
})
export class CheckedoutbooksComponent {

  remote: RemoteService;
  currentUser: CurrentuserService;
  books: Book[];
  booksByTitle: Book[];
  booksByPublicationYear: Book[];
  id: number | undefined;
  sortByCurrent: string;
  sortBy: string;

  constructor(remote:RemoteService, currentUser: CurrentuserService) {
    this.remote = remote;
    this.currentUser = currentUser;
    this.books = [];
    this.booksByTitle = [];
    this.booksByPublicationYear = [];
    this.id = 0;
    this.sortByCurrent = "default";
    this.sortBy = "default";
    this.retrieveCheckedOutBooks();
  }

  retrieveCheckedOutBooks() {

    console.log(this.sortBy);

    this.id = this.currentUser.getUserId();

    const user_id = this.id || 0;

    this.remote.retrieveCheckoutList(user_id)
    .subscribe({
      next: (data) => {
        this.books = data;

        this.booksByTitle = this.books.slice().sort((a, b) => {
          if(a.title < b.title) return -1;
          if(a.title > b.title) return 1; 
          return 0;
        });

        this.booksByPublicationYear = this.books.slice().sort((a, b) => {
          if(a.publicationYear < b.publicationYear) return -1;
          if(a.publicationYear > b.publicationYear) return 1;
          return 0;
        });

        console.log("------------");

        console.log("Books by Title");

        console.log(this.booksByTitle);

        console.log("Books by Publication Year")

        console.log(this.booksByPublicationYear);
      },
      error: (error:HttpErrorResponse) => {
        console.log(error.error);
      }
    })
  }

  hideAndReveal() {
    this.sortByCurrent = this.sortBy;
    console.log(this.sortByCurrent);
  }
}
