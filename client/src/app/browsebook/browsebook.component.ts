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
  browseGenre:string;
  hasBeenClicked:boolean;

  constructor(remote:RemoteService, currentBook:CurrentbookService) {
    this.bookList = [];
    this.remote = remote;
    this.browseGenre = "";
    this.hasBeenClicked = false;
    this.currentBook = currentBook;
  }

  retrieveBooks() {

    this.hasBeenClicked = true;

    this.remote.retrieveBooksByGenre(this.browseGenre)
    .subscribe({
      next: (data) => {
        console.log("Books retrieved!");
        this.bookList = data;
        console.log(this.bookList);
      },
      error: (error:HttpErrorResponse) => {
        alert("Could not retrieve books...")
        console.log(error);
      }
    }) 
  }

  // getImageSrc(imageType:string):string {

  //   if(imageType === "image/png") {
  //     return "data:image/png;base64,";
  //   } else if(imageType === "image/jpeg") {
  //     return "data:image/jpeg;base64,";
  //   }
  //   return ""; 
  // }

  showBookView(book:Book) {
    this.currentBook.setCurrentBook(book);
    this.remote.redirect('/bookview');
  }
}
