import { Component } from '@angular/core';
import { Auth, RemoteService, User } from '../remote.service';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { CurrentuserService } from '../currentuser.service';
import { AuthService } from '../auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string;
  password: string;
  remote:RemoteService;
  currentUserService:CurrentuserService;
  authService:AuthService;

  constructor(remote:RemoteService, currentUserService:CurrentuserService, authService:AuthService) {
    this.username = "";
    this.password = "";
    this.remote = remote;
    this.currentUserService = currentUserService;
    this.authService = authService;
  }

  submitLogin() {

    if(this.username === "" || this.password === "") {
      alert("Username or Password field(s) are empty!")
    } else {
      let auth:Auth = {
        username: this.username,
        password: this.password
      }
  
      this.remote.submitLogin(auth)
      .subscribe({
        next: (data) => {
          alert("Login Successful!");
          let currentUser = data.body as User;
          this.currentUserService.setUserId(currentUser.id);
          this.currentUserService.setUsername(currentUser.username);
          this.currentUserService.setEmail(currentUser.email);
          this.currentUserService.setIsPublisher(currentUser.isPublisher);
          this.authService.login();
          if(currentUser.isPublisher) {
            this.authService.confirmIsPublisher();
          }
          this.remote.redirect('dashboard');
        },
        error: (error: HttpErrorResponse) => {
          alert("Access Denied...")
          console.log(error);
        }
      })
    }
  }
}
