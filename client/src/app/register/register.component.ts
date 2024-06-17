import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterUserDto, Book, RemoteService } from '../remote.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
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

    if(this.username === '' || this.email === '' || this.password === '' || this.confirmPassword === '') {
      alert("One or more fields are blank!");
    }
    else if(this.username.length < 5) {
      alert("Username should be 5 or more characters!")
    }
    else if(!this.validateEmail(this.email)) {
      alert("Please enter a valid email!")
    }
    else if(this.password.length < 8) {
      alert("Password is too short!")
    } 
    else if(this.password !== this.confirmPassword) {
      alert("Password and Confirm Password are different!");
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

  validateEmail(email:string):boolean {

    const word = email.split("@");

    if(word[0] == null) {
      return false;
    }

    if(!email.includes("@") || email.indexOf("@") !== email.lastIndexOf("@")) {
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.(com|net|org|edu|gov|mil|us|uk|ca|au|de|fr|jp|cn|in)$/i;

    return emailPattern.test(email);
  }
}
