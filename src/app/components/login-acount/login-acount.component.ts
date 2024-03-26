import { Component } from '@angular/core';
import { ContinueWithComponent } from '../continue-with/continue-with.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterCardComponent } from '../footer-card/footer-card.component';
@Component({
  selector: 'app-login-acount',
  standalone: true,
  imports: [ContinueWithComponent, NavBarComponent, FooterCardComponent],
  templateUrl: './login-acount.component.html',
  styleUrl: './login-acount.component.css'
})
export class LoginAcountComponent {

}
