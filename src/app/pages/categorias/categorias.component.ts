import { Component } from '@angular/core';
import { FooterCardComponent } from "../../components/footer-card/footer-card.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";

@Component({
    selector: 'app-categorias',
    standalone: true,
    templateUrl: './categorias.component.html',
    styleUrl: './categorias.component.css',
    imports: [FooterCardComponent, NavBarComponent]
})
export class CategoriasComponent {

}
