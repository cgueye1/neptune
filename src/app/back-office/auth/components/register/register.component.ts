import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(private router: Router) {}

  onSubmit() {
    Swal.fire({
      html: 'Votre inscription est en attente de validation.',
      icon: 'success',
      showConfirmButton: false,
      timer: 2000,
    }).then(() => {
      this.router.navigate(['auth/login']);
    });
  }

  onLogin() {
    this.router.navigate(['auth/login']);
  }
}
