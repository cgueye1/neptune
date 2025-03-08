import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-salle-reunion-create',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './salle-reunion-create.component.html',
  styleUrl: './salle-reunion-create.component.scss',
})
export class SalleReunionCreateComponent {

  constructor(private router: Router) {}

  onSave() {
    Swal.fire({
      icon: 'success',
      html: 'Réservation créé avec succès.',
      showConfirmButton: false,
      timer: 2000,
    }).then(() => {
      this.router.navigate(['/reservations/salles-de-reunion']);
    });
  }

  onReset() {
    this.router.navigate(['/reservations/salles-de-reunion']);
  }
}
