import { Component } from '@angular/core';
import { ContinueWithComponent } from '../continue-with/continue-with.component';
@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [ContinueWithComponent],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {

}
