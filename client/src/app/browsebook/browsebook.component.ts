import { Component } from '@angular/core';
import { Book, RemoteService } from '../remote.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-browsebook',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './browsebook.component.html',
  styleUrl: './browsebook.component.css'
})
export class BrowsebookComponent {

  bookList:Book[]
  remote:RemoteService

  constructor(remote:RemoteService) {
    this.bookList = [];
    this.remote = remote;
  }
}
