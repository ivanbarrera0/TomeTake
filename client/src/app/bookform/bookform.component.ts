import { Component } from '@angular/core';
import { Book, RemoteService } from '../remote.service';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-bookform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bookform.component.html',
  styleUrl: './bookform.component.css'
})
export class BookformComponent {

  title:string;
  author:string;
  genre:string;
  description:string;
  publicationYear:string;
  quantity:number;
  numberOfPages:number;
  remote:RemoteService;
  image:File | null = null;
  //fd = new FormData();

  constructor(remote:RemoteService) {
    this.title = "";
    this.author = "";
    this.genre = "";
    this.description = "";
    this.publicationYear = "";
    this.quantity = 0;
    this.numberOfPages = 0;
    this.remote = remote;
  }

  onFileSelected(event:any) {
    console.log(event);
    this.image = <File>event.target.files[0];
    //this.fd.append('image', this.image!, this.image.name);
  }

  addBook() {

    //console.log(this.image);

    let book:Book = {
      title: this.title,
      author: this.author,
      genre: this.genre,
      description: this.description,
      publicationYear: this.publicationYear,
      quantity: this.quantity,
      numberOfPages: this.numberOfPages,
      image: this.image!
    }

    this.remote.addBook(book)
    .subscribe({
      next: (data) => {
        alert("Book Successfully Added")
        console.log(data)
      },
      error: (error:HttpErrorResponse) => {
        alert("Couldn't add book...")
        console.log(error)
      }
    })
  }
}
