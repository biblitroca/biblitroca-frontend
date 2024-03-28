import { Routes } from '@angular/router';
import { LoginAccountComponent } from './components/login-account/login-account.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { HomeComponent } from './pages/home/home.component';
import { GridCardComponent } from './components/grid-card/grid-card.component';
import { GridOffCardComponent } from './components/grid-off-card/grid-off-card.component';
import { CategoriesCardComponent } from './components/categories-card/categories-card.component';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { SeboComponent } from './pages/sebo/sebo.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';

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
    component: SeboComponent, 
  },
  { 
    path: 'biblioteca',
    component: BibliotecaComponent 
  },
  {
    path: 'categorias',
    component: CategoriasComponent 
  },
];
