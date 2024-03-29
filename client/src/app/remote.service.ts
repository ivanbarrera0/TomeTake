import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  // NOTE: add "provideHttpClient()" to the providers
  // in the app.config.ts file
  httpClient: HttpClient;
  baseURL:string;

  constructor(httpClient:HttpClient) {
    this.httpClient = httpClient;
    this.baseURL = "http://localhost:8080"
  }

  registerUser(registerUserDto:RegisterUserDto):Observable<HttpResponse<Object>> {
    return this.httpClient.post(this.baseURL + "/register/auth", JSON.stringify(registerUserDto), {
      observe:'response',
      withCredentials: true,
      headers: new HttpHeaders ({
        'Content-Type': 'application/json'
      })
    })
  }
}

export interface Book {
  title:string;
  quantity:number;
  author:string;
  genre:string;
  description:string;
  publicationYear:string;
}

export interface RegisterUserDto {
  user:User;
  auth:Auth;
}

export interface User {
    username:string;
    email:string;
    checkoutList:Book[];
}

export interface Auth {
  username:string;
  password:string;
}
