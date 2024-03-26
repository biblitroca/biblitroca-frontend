import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GridOffCardComponent } from './components/grid-off-card/grid-off-card.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path:'list', component:GridOffCardComponent}
  
  ];

