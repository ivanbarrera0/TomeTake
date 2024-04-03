import { Component } from '@angular/core';
import { Auth, RemoteService, User } from '../remote.service';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { CurrentuserService } from '../currentuser.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string;
  password: string;
  remote:RemoteService;
  currentUserService:CurrentuserService;

  constructor(remote:RemoteService, currentUserService:CurrentuserService) {
    this.username = "";
    this.password = "";
    this.remote = remote;
    this.currentUserService = currentUserService;
  }

  submitLogin() {
    let auth:Auth = {
      username: this.username,
      password: this.password
    }

    this.remote.submitLogin(auth)
    .subscribe({
      next: (data) => {
        alert("Login Successful!");
        let currentUser = data.body as User;
        this.currentUserService.setUsername(currentUser.username);
        this.currentUserService.setEmail(currentUser.email);
        this.currentUserService.setIsPublisher(currentUser.isPublisher);
        this.remote.redirect('dashboard');
      },
      error: (error: HttpErrorResponse) => {
        alert("Access Denied...")
        console.log(error);
      }
    })
  }
}
