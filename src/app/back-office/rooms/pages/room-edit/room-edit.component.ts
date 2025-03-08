import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-room-edit',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './room-edit.component.html',
  styleUrl: './room-edit.component.scss',
})
export class RoomEditComponent {
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
      html: 'Chambre modifiée avec succès.',
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

