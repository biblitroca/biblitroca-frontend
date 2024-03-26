import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GridOffCardComponent } from './components/grid-off-card/grid-off-card.component';
import { GridCardComponent } from './components/grid-card/grid-card.component';
import { CategoriesCardComponent } from './components/categories-card/categories-card.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path:'sebo', component:GridOffCardComponent},
    { path:'biblioteca', component:GridCardComponent},
    { path:'categorias', component:CategoriesCardComponent},

  
  ];

