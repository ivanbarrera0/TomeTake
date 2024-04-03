import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterUserDto, Book, RemoteService } from '../remote.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  username:string;
  email:string;
  password:string;
  isPublisher:boolean;
  remote:RemoteService;

  constructor(remote:RemoteService) {
    this.remote = remote;
    this.username = "";
    this.email = "";
    this.password = "";
    this.isPublisher = false;
  }

  registerUser() {
    console.log("Submitting registration..")

    let registerUserDto: RegisterUserDto = {
      user: {
        username: this.username,
        email: this.email,
        isPublisher: this.isPublisher
      },
      auth: {
        username: this.username,
        password: this.password
      }
    }

    this.remote.registerUser(registerUserDto)
    .subscribe({
      next: (data) => {
        alert("User registered!");
        this.remote.redirect('login');
      },
      error: (error: HttpErrorResponse) => {
        alert("Couldn't register...")
        console.log(error.error)
      }
    })
  }
}
