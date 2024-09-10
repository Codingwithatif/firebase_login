import { Component, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../shared/auth.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule, RouterModule],
  providers: [
    AuthService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService) {}
  login() {
    if (this.email == '') {
      alert('plz enter email');
      return;
    }   

    if (this.password == '') {
      alert('plz enter password');
      return;
    }

    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}
