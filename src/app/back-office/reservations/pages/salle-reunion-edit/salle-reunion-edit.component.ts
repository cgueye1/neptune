import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-salle-reunion-edit',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './salle-reunion-edit.component.html',
  styleUrl: './salle-reunion-edit.component.scss',
})
export class SalleReunionEditComponent {
  roomTypes: string[] = ['Simple', 'Double', 'Suite', 'Familiale'];
  selectedRoom: any;
  rooms = [
    {
      name: 'Chambre 101',
      type: 'Simple',
      occupancy: 1,
      preferences: 'vueMer',
      availability: ['Disponible'],
    },
    {
      name: 'Chambre 202',
      type: 'Double',
      occupancy: 2,
      preferences: 'balcon',
      availability: ['Disponible'],
    },
    {
      name: 'Chambre 303',
      type: 'Suite',
      occupancy: 3,
      preferences: 'procheAscenseur',
      availability: ['Disponible'],
    },
    {
      name: 'Chambre 313',
      type: 'Suite',
      occupancy: 3,
      preferences: 'procheAscenseur',
      availability: ['Disponible'],
    },
    {
      name: 'Chambre 403',
      type: 'Suite',
      occupancy: 3,
      preferences: 'procheAscenseur',
      availability: ['Disponible'],
    },
  ];
  constructor(private router: Router) {}

  onSave() {
    Swal.fire({
      icon: 'success',
      html: 'Réservation enregistrée avec succès.',
      showConfirmButton: false,
      timer: 2000,
    }).then(() => {
      this.router.navigate(['/reservations/salles-de-reunion']);
    });
  }

  onReset() {
    this.router.navigate(['/reservations/salles-de-reunion']);
  }

  selectRoom(room: any): void {
    this.selectedRoom = room;
  }
}

