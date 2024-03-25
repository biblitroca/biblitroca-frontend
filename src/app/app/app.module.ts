import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginAcountComponent } from '../components/login-acount/login-acount.component';
import { CreateAccountComponent } from '../components/create-account/create-account.component';
import { HomeComponent } from '../pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'login', component: LoginAcountComponent },
  { path: 'createAccount', component: CreateAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppModule { }
