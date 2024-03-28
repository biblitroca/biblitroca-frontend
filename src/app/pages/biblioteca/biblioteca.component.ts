import { Component } from '@angular/core';
import { FooterCardComponent } from "../../components/footer-card/footer-card.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";

@Component({
    selector: 'app-biblioteca',
    standalone: true,
    templateUrl: './biblioteca.component.html',
    styleUrl: './biblioteca.component.css',
    imports: [FooterCardComponent, NavBarComponent]
})
export class BibliotecaComponent {

}
