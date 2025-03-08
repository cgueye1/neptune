import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { StatusDirective } from '../../../../core/directives/statut.directive';

@Component({
  selector: 'app-reservation-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, StatusDirective],
  templateUrl: './reservation-detail.component.html',
  styleUrl: './reservation-detail.component.scss',
})
export class ReservationDetailComponent {
  selectedStatus: string = 'PAID'; // Default value
  currentStatus: string = 'PAID';

  constructor(private router: Router) {}
  // Handle status change
  onStatusChange(newStatus: string): void {
    let confirmationText = '';
    let successMessage = '';

    switch (newStatus) {
      case 'PAID':
        confirmationText =
          'Êtes-vous sûr de vouloir changer ce statut en  <b>Payé</b> ?';
        successMessage = 'Réservation Payée avec succès !';
        break;
      case 'PENDING':
        confirmationText =
          'Êtes-vous sûr de vouloir changer ce statut en <b>En attente</b> ?';
        successMessage = 'Réservation mise en attente avec succès !';
        break;
      case 'CANCELED':
        confirmationText =
          'Êtes-vous sûr de vouloir <b>annuler</b> cette réservation ?';
        successMessage = 'Réservation annulée avec succès !';
        break;
      case 'SAVED':
        confirmationText =
          'Êtes-vous sûr de vouloir <b>enregistrer</b> cette réservation ?';
        successMessage = 'Réservation enregistrée avec succès !';
        break;
      default:
        confirmationText = 'Êtes-vous sûr de vouloir changer ce statut ?';
        successMessage = 'Statut changé avec succès !';
    }

    // Store the current status before asking for confirmation
    const previousStatus = this.currentStatus;

    // Show confirmation dialog using Swal (SweetAlert2)
    Swal.fire({
      title: 'Confirmation',
      html: confirmationText,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, Confirmer!',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        // Show success message after confirmation
        Swal.fire({
          title: 'Succès',
          text: successMessage,
          icon: 'success',
          timer: 2000,
        });
        this.currentStatus = newStatus;
      } else {
        this.selectedStatus = previousStatus;
      }
    });
  }

  editReservation(dataId: number) {
    this.router.navigate(['/reservations', dataId, 'edit-reservation']);
  }
}
