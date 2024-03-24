import { Component } from '@angular/core';
import { GridCardComponent } from "../../components/grid-card/grid-card.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { GridOffCardComponent } from "../../components/grid-off-card/grid-off-card.component";
import { FooterCardComponent } from "../../components/footer-card/footer-card.component";
import { CategoriesCardComponent } from "../../components/categories-card/categories-card.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [GridCardComponent, NavBarComponent, GridOffCardComponent, FooterCardComponent, CategoriesCardComponent]
})
export class HomeComponent {

}
