import { Component } from '@angular/core';
import { UserModel } from '../../shared/model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  utenteLoggato: UserModel;
  isLogged: boolean;

  constructor(private router: Router) {
    this.utenteLoggato = JSON.parse(localStorage.getItem('user'));
    this.isLogged = JSON.parse(localStorage.getItem('logged')).isLogged;
    if (!this.isLogged) {
      this.router.navigateByUrl('/login');
    }
  }

  logout() {
    this.isLogged = false;
    localStorage.removeItem('logged');
    this.router.navigateByUrl('/login');
  }
}
