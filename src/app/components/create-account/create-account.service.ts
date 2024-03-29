import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {
  criarUser(userData: {}) {
    throw new Error('Method not implemented.');
  }

  private ApiUrl = 'https://biblitroca.onrender.com/users'

  constructor(private http: HttpClient) { }


  createUser(userData: any){
    return this.http.post(this.ApiUrl, userData)
  }

}
