import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  httpClient: HttpClient;
  baseURL:string;

  constructor(httpClient:HttpClient) {
    this.httpClient = httpClient;
    this.baseURL = "http://localhost:8080"
   }
}
