import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowsebookComponent } from './browsebook/browsebook.component';
import { BookviewComponent } from './bookview/bookview.component';
import { CheckedoutbooksComponent } from './checkedoutbooks/checkedoutbooks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet,
    NavbarComponent, 
    LoginComponent, 
    RegisterComponent,
    DashboardComponent,
    BrowsebookComponent,
    BookviewComponent, 
    CheckedoutbooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TomeTake';
}
