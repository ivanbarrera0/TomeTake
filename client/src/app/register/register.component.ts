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
  confirmPassword:string;
  isPublisher:boolean;
  remote:RemoteService;
  passwordClick: boolean;
  confirmPasswordClick: boolean;

  constructor(remote:RemoteService) {
    this.remote = remote;
    this.username = "";
    this.email = "";
    this.password = "";
    this.confirmPassword = "";
    this.isPublisher = false;
    this.passwordClick = false;
    this.confirmPasswordClick = false;
  }

  registerUser() {
    console.log("Submitting registration..")

    if(this.confirmPassword !== this.password) {
      alert("Password and Confirm Password are different");
    } else {
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
          console.log(error.error);
        }
      })
    }
  }
}
