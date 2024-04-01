import { Component } from '@angular/core';
import { Auth, RemoteService } from '../remote.service';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

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

  constructor(remote:RemoteService) {
    this.username = "";
    this.password = "";
    this.remote = remote;
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
        console.log(data)
        this.remote.redirect('dashboard');
      },
      error: (error: HttpErrorResponse) => {
        alert("Access Denied...")
        console.log(error);
      }
    })
  }
}
