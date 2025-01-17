import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../../shared/model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrazione',
  standalone: false,

  templateUrl: './registrazione.component.html',
  styleUrl: './registrazione.component.scss',
})
export class RegistrazioneComponent {
  private router = inject(Router);

  equals = false;

  formRegistrazione = new FormGroup({
    nome: new FormControl('', Validators.required),
    cognome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){6,15}$/
      ),
    ]),
    ripetiPassword: new FormControl('', Validators.required),
    sesso: new FormControl('', Validators.required),
    accetto: new FormControl(false, Validators.required),
  });

  checkPassword(event) {
    if (event === this.formRegistrazione.controls.password.value) {
      this.equals = true;
    } else {
      this.equals = false;
    }
  }

  onSubmit() {
    const utente: UserModel = {
      nome: this.formRegistrazione.value.nome,
      cognome: this.formRegistrazione.value.cognome,
      email: this.formRegistrazione.value.email,
      password: this.formRegistrazione.value.password,
      sesso: this.formRegistrazione.value.sesso,
    };
    localStorage.setItem('user', JSON.stringify(utente));
    this.router.navigateByUrl('/login');
  }
}
