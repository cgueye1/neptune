import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { StatusDirective } from '../../../../core/directives/statut.directive';

@Component({
  selector: 'app-menage-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, StatusDirective],
  templateUrl: './menage-detail.component.html',
  styleUrl: './menage-detail.component.scss',
})
export class MenageDetailComponent {
  selectedStatus: string = 'DONE'; // Default value
  currentStatus: string = 'DONE';

  constructor(private router: Router) {}
  // Handle status change
  onStatusChange(newStatus: string): void {
    let confirmationText = '';
    let successMessage = '';

    switch (newStatus) {
      case 'DONE':
        confirmationText = 'Êtes-vous sûr de Marquer comme <b>Fait</b> ?';
        successMessage = 'Statut changé avec succès !';
        break;
      case 'NOTDONE':
        confirmationText = confirmationText =
          'Êtes-vous sûr de Marquer comme <b>Pas Fait</b> ?';
        successMessage = 'Statut changé avec succès !';
        break;
      case 'INSPECT':
        confirmationText = 'Êtes-vous sûr de Marquer comme <b>Inspecté</b> ?';
        successMessage = 'Statut changé avec succès !';
        break;
      case 'NOTINSPECT':
        confirmationText =
          'Êtes-vous sûr de Marquer comme <b>Pas Inspecté</b> ?';
        successMessage = 'Statut changé avec succès !';
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

  onSave() {
    Swal.fire({
      icon: 'success',
      html: 'Chambre modifiée avec succès.',
      showConfirmButton: false,
      timer: 2000,
    }).then(() => {
      this.router.navigate(['/rooms/menages']);
    });
  }

  onReset() {
    this.router.navigate(['/rooms/menages']);
  }
}

