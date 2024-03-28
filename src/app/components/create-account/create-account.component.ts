import { Component, OnInit } from '@angular/core';
import { ContinueWithComponent } from '../continue-with/continue-with.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterCardComponent } from '../footer-card/footer-card.component';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';
@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [ContinueWithComponent, NavBarComponent, FooterCardComponent, RouterModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent{

  constructor(private apiService: ApiService) {}

  // getResponse(){
  //   this.apiService.getUsers().subscribe(response => {
  //     console.log(response);
  //   });
  //   throw new Error('deu erro');
  // }

  
}
