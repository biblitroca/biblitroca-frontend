import { Component } from '@angular/core';
import { ContinueWithComponent } from '../continue-with/continue-with.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterCardComponent } from '../footer-card/footer-card.component';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-login-account',
  standalone: true,
  imports: [ContinueWithComponent, NavBarComponent, FooterCardComponent, CommonModule, RouterModule],
  templateUrl: './login-account.component.html',
  styleUrl: './login-account.component.css'
})
export class LoginAccountComponent {

}
