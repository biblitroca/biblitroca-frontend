import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-grid-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './grid-card.component.html',
  styleUrl: './grid-card.component.css',
})
export class GridCardComponent implements OnInit {
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
