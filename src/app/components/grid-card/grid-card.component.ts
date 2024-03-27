import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../api.service';
@Component({
  selector: 'app-grid-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './grid-card.component.html',
  styleUrl: './grid-card.component.css',
})
export class GridCardComponent implements OnInit {
  name: any;
  author: any;
  type: any;
  price: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.get().subscribe((data: any) => {
      console.log(data);
    });
    throw new Error('erro');
  }
}
