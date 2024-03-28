import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { FooterCardComponent } from "../../components/footer-card/footer-card.component";
import { GridCardComponent } from "../../components/grid-card/grid-card.component";
import { RouterModule } from '@angular/router';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-sebo',
    standalone: true,
    templateUrl: './sebo.component.html',
    styleUrl: './sebo.component.css',
    imports: [NavBarComponent, FooterCardComponent, GridCardComponent, RouterModule, CommonModule]
})
export class SeboComponent {
    books: any[] = [];
    public image!: Observable<any>;
    
    constructor(private apiService: ApiService) {}
  
    ngOnInit(): void {
      this.apiService.get().subscribe((response) =>{
        this.books = response; 
      }),
      this.image = this.apiService.getRandomImage();    
    }

}
