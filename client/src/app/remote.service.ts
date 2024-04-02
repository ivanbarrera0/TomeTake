import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  // NOTE: add "provideHttpClient()" to the providers
  // in the app.config.ts file
  httpClient: HttpClient;
  baseURL:string;
  router:Router;

  constructor(httpClient:HttpClient, router:Router) {
    this.httpClient = httpClient;
    this.router = router;
    this.baseURL = "http://localhost:8080"
  }

  registerUser(registerUserDto:RegisterUserDto): Observable<HttpResponse<Object>> {
    return this.httpClient.post(this.baseURL + "/register/auth", JSON.stringify(registerUserDto), {
      observe:'response',
      withCredentials: true,
      headers: new HttpHeaders ({
        'Content-Type': 'application/json'
      })
    })
  }

  submitLogin(auth:Auth): Observable<HttpResponse<Object>> {
    return this.httpClient.post(this.baseURL + "/login/auth", JSON.stringify(auth), {
      observe:'response',
      withCredentials: true,
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    )
  }
  
  addBook(book:Book): Observable<HttpResponse<Object>> {
    return this.httpClient.post(this.baseURL + "/addBook", JSON.stringify(book), {
      observe:'response',
      withCredentials: true,
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  redirect(url:string) {
    this.router.navigate([url]);
  }
}

export interface Book {
  title:string;
  quantity:number;
  numberOfPages:number;
  author:string;
  genre:string;
  description:string;
  publicationYear:string;
}

export interface RegisterUserDto {
  user:User;
  auth:Auth;
}

// TODO: Change the checkoutList from a book[] to a checkout[]


export interface User {
    username:string;
    email:string;
    checkoutList:Book[];
}

export interface Auth {
  username:string;
  password:string;
}
