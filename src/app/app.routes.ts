import { Routes } from '@angular/router';
import { LoginAccountComponent } from './components/login-account/login-account.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { HomeComponent } from './pages/home/home.component';
import { GridCardComponent } from './components/grid-card/grid-card.component';
import { GridOffCardComponent } from './components/grid-off-card/grid-off-card.component';
import { CategoriesCardComponent } from './components/categories-card/categories-card.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginAccountComponent,
  },
  {
    path: 'createAccount',
    component: CreateAccountComponent,
  },
  { 
    path: 'sebo',
    component: GridOffCardComponent 
  },
  { 
    path: 'biblioteca',
    component: GridCardComponent 
  },
  {
    path: 'categorias',
    component: CategoriesCardComponent 
  },
];
