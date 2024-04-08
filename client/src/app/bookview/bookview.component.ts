import { Component } from '@angular/core';
import { CurrentbookService } from '../currentbook.service';
import { Book } from '../remote.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-bookview',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './bookview.component.html',
  styleUrl: './bookview.component.css'
})
export class BookviewComponent {

  currentBook:CurrentbookService;
  book:Book;

  constructor(currentBook: CurrentbookService) {
    this.currentBook = currentBook;
    this.book = this.currentBook.getCurrentBook();
  }
}
