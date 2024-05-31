import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowsebookComponent } from './browsebook/browsebook.component';
import { BookformComponent } from './bookform/bookform.component';
import { BookviewComponent } from './bookview/bookview.component';
import { CheckedoutbooksComponent } from './checkedoutbooks/checkedoutbooks.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './auth.guard';
import { publisherGuard } from './publisher.guard';

export const routes: Routes = 
[{path: "", component: LoginComponent},
{path:"login", component: LoginComponent}, 
{path:"register", component: RegisterComponent},
{path:"dashboard", component: DashboardComponent, canActivate: [authGuard]},
{path: "browsebook", component: BrowsebookComponent, canActivate: [authGuard]},
{path: "bookform", component: BookformComponent, canActivate: [authGuard, publisherGuard]},
{path: "bookview", component: BookviewComponent, canActivate: [authGuard]},
{path: "checkedoutbooks", component: CheckedoutbooksComponent, canActivate: [authGuard]},
{path: "**", component: PageNotFoundComponent}];
