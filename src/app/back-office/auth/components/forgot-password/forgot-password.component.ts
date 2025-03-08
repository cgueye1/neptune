import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  constructor(private router: Router) {}

  onSubmit() {
    Swal.fire({
      html: 'Votre demande de changement de mot de passe est bien prise en compte. Merci de réinitialiser votre mot de passe.',
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'OK',
    }).then(() => {
      this.router.navigate(['auth/reset-password']);
    });
  }

  onReset() {
    this.router.navigate(['auth/login']);
  }
}
