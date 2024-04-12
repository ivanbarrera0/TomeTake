import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentuserService {

  id?: number | undefined;
  username: string;
  email: string;
  isPublisher:boolean;

  constructor() {
    this.id = 0;
    this.username = "";
    this.email = "";
    this.isPublisher = false;
   }

   setUserId(userId: number | undefined) {
    this.id = userId;
   }

   getUserId():number | undefined {
    return this.id;
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
