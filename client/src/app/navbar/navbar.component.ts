import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CurrentuserService } from '../currentuser.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, 
    RouterOutlet,
    CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  currentUserService:CurrentuserService;

  constructor(currentUserService:CurrentuserService) {
    this.currentUserService = currentUserService;
  }
}
