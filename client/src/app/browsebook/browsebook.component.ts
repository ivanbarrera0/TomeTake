import { Component } from '@angular/core';
import { Book, RemoteService } from '../remote.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

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
  browseGenre:string;
  hasBeenClicked:boolean;

  constructor(remote:RemoteService) {
    this.bookList = [];
    this.remote = remote;
    this.browseGenre = "";
    this.hasBeenClicked = false;
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
}
