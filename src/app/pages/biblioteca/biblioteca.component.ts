import { Component } from '@angular/core';
import { FooterCardComponent } from "../../components/footer-card/footer-card.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";

import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-biblioteca',
    standalone: true,
    templateUrl: './biblioteca.component.html',
    styleUrl: './biblioteca.component.css',
    imports: [FooterCardComponent, NavBarComponent, CommonModule]
})
export class BibliotecaComponent {

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