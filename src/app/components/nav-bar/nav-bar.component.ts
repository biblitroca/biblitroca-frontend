import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [BannerComponent, CommonModule, RouterModule], 
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  showImage: boolean = true;
}