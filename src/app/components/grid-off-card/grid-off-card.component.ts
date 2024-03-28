import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid-off-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './grid-off-card.component.html',
  styleUrl: './grid-off-card.component.css'
})
export class GridOffCardComponent {
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
