import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { GridOffCardComponent } from './components/grid-off-card/grid-off-card.component';


const routes: Routes = [
  { path: '', component: HomeComponent },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
