import { Component } from '@angular/core';
import { Book, RemoteService } from '../remote.service';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bookform',
  standalone: true,
  imports: [FormsModule, RouterLink],
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
  imageType:string;

  constructor(remote:RemoteService) {
    this.title = "";
    this.author = "";
    this.genre = "";
    this.description = "";
    this.publicationYear = "";
    this.quantity = 0;
    this.numberOfPages = 0;
    this.imageType = "";
    this.remote = remote;
  }

  onFileSelected(event:any) {
    console.log(event);
    this.image = <File>event.target.files[0];

    console.log(this.image.type);

    this.imageType = this.image.type;
    
    if(this.image.size >= 1048576) {
      alert("File size exceeds 1 MB limit");
    }
  }

  addBook() {
    
    if(this.validateBook()) {
      let book:Book = {
        title: this.title,
        author: this.author,
        genre: this.genre,
        description: this.description,
        publicationYear: this.publicationYear,
        quantity: this.quantity,
        numberOfPages: this.numberOfPages,
        imageType: this.imageType,
        image: this.image!,
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

  validateBook():boolean {
    if(this.title === "") {
      alert("Please enter a title");
      return false;
    } else if(this.author === "") {
      alert("Please enter an author");
      return false;
    } else if(this.genre === "") {
      alert("Please enter a genre");
      return false;
    } else if(this.description === "") {
      alert("Please enter a description");
      return false;
    } else if(this.publicationYear === "") {
      alert("Please enter a publication year");
      return false;
    } else if(this.quantity <= 0) {
      alert("Please enter a valid quantity");
      return false;
    } else if(this.numberOfPages <= 0) {
      alert("Please enter a valid number of pages");
      return false;
    } else if(this.image == null || this.image.size > 1048576) {
      alert("Image file is too large or was not uploaded");
      return false;
    }
    return true;
  }
}
