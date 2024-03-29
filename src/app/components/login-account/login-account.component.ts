import { Component } from '@angular/core';
import { ContinueWithComponent } from '../continue-with/continue-with.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterCardComponent } from '../footer-card/footer-card.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../api.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-account',
  standalone: true,
  imports: [
    ContinueWithComponent,
    NavBarComponent,
    FooterCardComponent,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login-account.component.html',
  styleUrl: './login-account.component.css',
})
export class LoginAccountComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {
    console.log('passou ');
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit(): void {
    console.log('entrou');
    if (this.loginForm.valid) {
      console.log('entrou no if');
      this.apiService.post(this.loginForm.value).subscribe(result => {});
      console.log('valor:' + this.loginForm);

    }
  }
}
