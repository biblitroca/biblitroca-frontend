import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { FooterCardComponent } from "../../components/footer-card/footer-card.component";
import { CartComponent } from "../../components/cart/cart.component";

@Component({
    selector: 'app-carrinho',
    standalone: true,
    templateUrl: './carrinho.component.html',
    styleUrl: './carrinho.component.css',
    imports: [NavBarComponent, FooterCardComponent, CartComponent]
})
export class CarrinhoComponent {

}
