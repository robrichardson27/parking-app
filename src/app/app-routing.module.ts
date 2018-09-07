import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './core/signin/signin.component';
import { SignupComponent } from './core/signup/signup.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent, data: {title: 'Sign In'} },
  { path: 'signup', component: SignupComponent, data: {title: 'Sign Up'} },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { enableTracing: true }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
