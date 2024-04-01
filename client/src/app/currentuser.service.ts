import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentuserService {

  username: string;
  email: string;

  constructor() {
    this.username = "";
    this.email = "";
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
}
