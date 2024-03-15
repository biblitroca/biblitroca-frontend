import { Component } from '@angular/core';
import { GridCardComponent } from "../../components/grid-card/grid-card.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { NewsCardComponent } from "../../components/news-card/news-card.component";
import { GridOffCardComponent } from "../../components/grid-off-card/grid-off-card.component";
import { FooterCardComponent } from "../../components/footer-card/footer-card.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [GridCardComponent, NavBarComponent, NewsCardComponent, GridOffCardComponent, FooterCardComponent]
})
export class HomeComponent {

}
