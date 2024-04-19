import { Component } from '@angular/core';
import { Book, RemoteService } from '../remote.service';
import { CurrentuserService } from '../currentuser.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkedoutbooks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkedoutbooks.component.html',
  styleUrl: './checkedoutbooks.component.css'
})
export class CheckedoutbooksComponent {

  remote: RemoteService;
  currentUser: CurrentuserService;
  books: Book[];
  id: number | undefined;

  constructor(remote:RemoteService, currentUser: CurrentuserService) {
    this.remote = remote;
    this.currentUser = currentUser;
    this.books = [];
    this.id = 0;
    this.retrieveCheckedOutBooks();
  }

  retrieveCheckedOutBooks() {
    this.id = this.currentUser.getUserId();

    const user_id = this.id || 0;

    this.remote.retrieveCheckoutList(user_id)
    .subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (error:HttpErrorResponse) => {
        console.log(error.error);
      }
    })
  }
}
