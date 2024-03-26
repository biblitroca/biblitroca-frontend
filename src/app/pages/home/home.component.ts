import { Component } from '@angular/core';
import { GridCardComponent } from '../../components/grid-card/grid-card.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { GridOffCardComponent } from '../../components/grid-off-card/grid-off-card.component';
import { FooterCardComponent } from '../../components/footer-card/footer-card.component';
import { CategoriesCardComponent } from '../../components/categories-card/categories-card.component';
import { CreateAccountComponent } from '../../components/create-account/create-account.component';
import { ContinueWithComponent } from '../../components/continue-with/continue-with.component';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../../components/banner/banner.component';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    GridCardComponent,
    NavBarComponent,
    GridOffCardComponent,
    FooterCardComponent,
    CategoriesCardComponent,
    CreateAccountComponent,
    ContinueWithComponent,
    BannerComponent
  ],
})
export class HomeComponent {

}
