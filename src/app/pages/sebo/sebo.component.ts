import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { FooterCardComponent } from "../../components/footer-card/footer-card.component";
import { GridCardComponent } from "../../components/grid-card/grid-card.component";
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-sebo',
    standalone: true,
    templateUrl: './sebo.component.html',
    styleUrl: './sebo.component.css',
    imports: [NavBarComponent, FooterCardComponent, GridCardComponent, RouterModule]
})
export class SeboComponent {

}
