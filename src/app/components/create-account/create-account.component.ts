import { Component } from '@angular/core';
import { ContinueWithComponent } from '../continue-with/continue-with.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterCardComponent } from '../footer-card/footer-card.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [ContinueWithComponent, NavBarComponent, FooterCardComponent, RouterModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
}
