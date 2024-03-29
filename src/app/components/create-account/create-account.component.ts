import { Component, OnInit } from '@angular/core';
import { ContinueWithComponent } from '../continue-with/continue-with.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterCardComponent } from '../footer-card/footer-card.component';
import { CommonModule } from '@angular/common';
import { CreateAccountService } from './create-account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [ContinueWithComponent, NavBarComponent, FooterCardComponent, FormsModule,
    RouterModule, CommonModule, CreateAccountComponent, ReactiveFormsModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent implements OnInit {

  userForm: FormGroup;

  constructor(private createAcconunt: CreateAccountService, private fb: FormBuilder) {

    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }


  ngOnInit(): void {

  }

  criarUser() {

    this.createAcconunt.createUser(this.userForm.value).subscribe(
      response => {
      
      },
      error => {
        console.error('Erro ao criar usuário:', error);
      }
    )
  }


}
