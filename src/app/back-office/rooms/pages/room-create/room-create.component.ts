import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-room-create',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './room-create.component.html',
  styleUrl: './room-create.component.scss',
})
export class RoomCreateComponent {
  roomTypes = [
    'Chambre Triple Exécutive',
    'Chambre Standard',
    'Chambre Exécutive Famille',
    'Chambre Exécutive',
  ];
  roomCategories = ['Standard', 'Executive'];
  bedType = ['Double', 'Simple'];
  constructor(private router: Router) {}

  onSave() {
    Swal.fire({
      icon: 'success',
      html: 'Chambre enregistrée avec succès.',
      showConfirmButton: false,
      timer: 2000,
    }).then(() => {
      this.router.navigate(['/rooms/list']);
    });
  }

  onReset() {
    this.router.navigate(['/rooms/list']);
  }
}
