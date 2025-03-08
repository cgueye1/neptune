import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarification-create',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './tarification-create.component.html',
  styleUrl: './tarification-create.component.scss',
})
export class TarificationCreateComponent {
  roomTypes = [
    'Chambre Standard',
    'Chambre Suite',
    'Chambre Exécutive',
  ];

  constructor(private router: Router) {}

  onSave() {
    Swal.fire({
      icon: 'success',
      html: 'Tarification enregistrée avec succès.',
      showConfirmButton: false,
      timer: 2000,
    }).then(() => {
      this.router.navigate(['/tarifications']);
    });
  }

  onReset() {
    this.router.navigate(['/tarifications']);
  }
}

