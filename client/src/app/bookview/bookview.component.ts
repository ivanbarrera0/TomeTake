import { Component } from '@angular/core';
import { CurrentbookService } from '../currentbook.service';
import { Book, RemoteService } from '../remote.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CurrentuserService } from '../currentuser.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowsebookComponent } from '../browsebook/browsebook.component';

@Component({
  selector: 'app-bookview',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, BrowsebookComponent],
  templateUrl: './bookview.component.html',
  styleUrl: './bookview.component.css'
})
export class BookviewComponent {

  currentBook:CurrentbookService;
  currentUser:CurrentuserService;
  remote: RemoteService;
  book:Book;

  constructor(currentBook: CurrentbookService, currentUser:CurrentuserService, remote:RemoteService) {
    this.currentBook = currentBook;
    this.currentUser = currentUser;
    this.remote = remote;
    this.book = this.currentBook.getCurrentBook();
  }

  checkoutBook() {

    console.log(this.currentBook);
    console.log(this.currentUser);

    this.book.quantity -= 1;

    let checkout = {
      user: {
        id: this.currentUser.getUserId(),
        username: this.currentUser.getUsername(),
        email: this.currentUser.getEmail(),
        isPublisher: this.currentUser.getIsPublisher()
      },
      book: {
        id: this.book.id,
        title: this.book.title,
        author: this.book.author,
        genre: this.book.genre,
        description: this.book.description,
        publicationYear: this.book.publicationYear,
        quantity: this.book.quantity,
        numberOfPages: this.book.numberOfPages,
        imageType: this.book.imageType
      }
    }

    this.remote.addCheckout(checkout)
    .subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    })    
  }
}
