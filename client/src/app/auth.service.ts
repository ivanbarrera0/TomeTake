import { Injectable } from '@angular/core';
import { CurrentuserService } from './currentuser.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn:boolean = false;
  private isPublisher:boolean = false;

  isLoggedIn():boolean {
    return this.loggedIn;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
    this.isPublisher = false;
  }

  confirmIsPublisher() {
    this.isPublisher = true;
  }

  isAPublisher():boolean {
    return this.isPublisher;
  }
}
