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

  constructor(private router: Router) {
    this.utenteLoggato = JSON.parse(localStorage.getItem('user'));
    if (!this.utenteLoggato) {
      this.router.navigateByUrl('/login');
    }
  }
}
