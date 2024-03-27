import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string = 'https://biblitroca.onrender.com/books';

  constructor(private http: HttpClient) { }

  getBooks(){
    return this.http.get(this.apiUrl)
  }

}
