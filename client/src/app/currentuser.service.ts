import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentuserService {

  username: string;
  email: string;
  isPublisher:boolean;

  constructor() {
    this.username = "";
    this.email = "";
    this.isPublisher = false;
   }

   setUsername(username:string) {
    this.username = username;
   }

   getUsername():string {
    return this.username;
   }

   setEmail(email:string) {
    this.email = email;
   }

   getEmail():string {
    return this.email;
   }

   setIsPublisher(isPublisher:boolean) {
    this.isPublisher = isPublisher;
   }

   getIsPublisher():boolean {
    return this.isPublisher;
   }
}
