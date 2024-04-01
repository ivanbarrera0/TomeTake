import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrentuserService } from '../currentuser.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  currentUserService: CurrentuserService;

  constructor(currentUserService: CurrentuserService) {
    this.currentUserService = currentUserService;
  }
}
