import { Component } from '@angular/core';
import { RegisterComponent } from './auth/register/register.component';

@Component({
  selector: 'app-root',
  imports: [RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'HRMS';
}
