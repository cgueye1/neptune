import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservation-edit',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './reservation-edit.component.html',
  styleUrl: './reservation-edit.component.scss',
})
export class ReservationEditComponent {
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
      html: 'Réservation modifiée avec succès.',
      showConfirmButton: false,
      timer: 2000,
    }).then(() => {
      this.router.navigate(['/reservations']);
    });
  }

  onReset() {
    this.router.navigate(['/reservations']);
  }

  selectRoom(room: any): void {
    this.selectedRoom = room;
  }
}

