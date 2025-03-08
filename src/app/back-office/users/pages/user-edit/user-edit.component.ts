import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.scss',
})
export class UserEditComponent {
  profils: string[] = [
    'Clients',
    'Femmes de ménages',
    'Chauffeurs',
    'Réception',
    'Superviseur',
    'DG',
  ];

  constructor(private router: Router) {}

  onSave() {
    Swal.fire({
      icon: 'success',
      html: 'Compte modifié avec succès.',
      showConfirmButton: false,
      timer: 2000,
    }).then(() => {
      this.router.navigate(['/users']);
    });
  }

  onReset() {
    this.router.navigate(['/users']);
  }
}
