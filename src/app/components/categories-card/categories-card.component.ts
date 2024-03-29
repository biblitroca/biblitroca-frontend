import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-categories-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './categories-card.component.html',
  styleUrl: './categories-card.component.css'
})
export class CategoriesCardComponent {

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
