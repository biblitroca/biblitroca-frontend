import { Component, OnInit } from '@angular/core';
import { ContinueWithComponent } from '../continue-with/continue-with.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterCardComponent } from '../footer-card/footer-card.component';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';
import { RouterModule } from '@angular/router';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [
    ContinueWithComponent,
    NavBarComponent,
    FooterCardComponent,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css',
})
export class CreateAccountComponent {
  loginForm: FormGroup;
  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) {
    console.log('passou ');
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit(): void {
    console.log('entrou');
    if (this.loginForm.valid) {
      console.log('entrou no if legal');
      this.apiService.post(this.loginForm.value).subscribe(() => {});
      console.log('valor:' + this.loginForm);
      this.loginForm.reset();
      window.location.reload();
    }
  }
}
