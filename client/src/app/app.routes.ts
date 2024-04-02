import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowsebookComponent } from './browsebook/browsebook.component';
import { BookformComponent } from './bookform/bookform.component';

export const routes: Routes = 
[{path:"login", component: LoginComponent}, 
{path:"register", component: RegisterComponent},
{path:"dashboard", component: DashboardComponent},
// May change route later
{path: "dashboard/browsebook", component: BrowsebookComponent},
{path: "dashboard/bookform", component: BookformComponent}];
