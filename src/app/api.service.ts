import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiBooks: string = 'https://biblitroca.onrender.com/books';

  private apiUser: string = 'https://biblitroca.onrender.com/users';

  private apiLogin: string = 'https://biblitroca.onrender.com/login';

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(this.apiBooks);
  }

  public getRandomImage(): Observable<any> {
    return this.http.get('https://source.unsplash.com/random')
      .pipe(
        catchError(v => of(v['url']))
      );
  }

  post(userData: any): Observable<any>{
    return this.http.post<any>(this.apiUser, userData);
  }
   
  postLogin(userData: any): Observable<any>{
    return this.http.post<any>(this.apiLogin, userData);
  }
}
