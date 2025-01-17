import { Component, inject } from '@angular/core';
import { UserModel } from '../../shared/model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private router = inject(Router);

  showErrorMessage = false;

  onSubmit(formValue) {
    const utente: UserModel = JSON.parse(localStorage.getItem('user'));
    if (
      utente.email === formValue.email &&
      utente.password === formValue.password
    ) {
      this.showErrorMessage = false;
      localStorage.setItem('logged', JSON.stringify({ isLogged: true }));
      this.router.navigateByUrl('/home');
    } else {
      this.showErrorMessage = true;
    }
  }
}
