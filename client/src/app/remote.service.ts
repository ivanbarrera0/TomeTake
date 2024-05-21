import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
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

    let queryParams = new HttpParams().append('title', book.title).append('quantity', book.quantity).append('numberOfPages', book.numberOfPages)
    .append('author', book.author).append('genre', book.genre).append('description', book.description).append('publicationYear', book.publicationYear);

    const fd = new FormData();
    fd.append("image", book.image!);

    return this.httpClient.post(this.baseURL + "/addBook", fd, {

      params: queryParams,
      observe:'response',
      withCredentials: true,
    })
  }

  retrieveBooksByGenre(genre:string): Observable<any> {

    let queryParams = new HttpParams().append('genre', genre);

    return this.httpClient.get(this.baseURL + "/retrieveBooks", {
      params: queryParams,
      withCredentials: true,
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  addCheckout(checkout:Checkout): Observable<HttpResponse<Object>> {
    return this.httpClient.post(this.baseURL + "/checkout/book", JSON.stringify(checkout), {
      observe:'response',
      withCredentials: true,
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  retrieveCheckoutList(id:number): Observable<any> {

    let queryParams = new HttpParams().append('id', id);

    return this.httpClient.get(this.baseURL + "/retrieveCheckedOutBooks", {
      params: queryParams,
      withCredentials:true,
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
  id?:number;
  title:string;
  quantity:number;
  numberOfPages:number;
  author:string;
  genre:string;
  description:string;
  publicationYear:string;
  image?:File;
}

export interface RegisterUserDto {
  user:User;
  auth:Auth;
}

export interface User {
    id?:number
    username:string;
    email:string;
    isPublisher:boolean;
}

export interface Auth {
  username:string;
  password:string;
}

export interface Checkout {
  id?:number;
  book:Book;
  user:User;
}
