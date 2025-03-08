import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { StatusDirective } from '../../../../core/directives/statut.directive';
@Component({
  selector: 'app-complaint-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, StatusDirective],
  templateUrl: './complaint-detail.component.html',
  styleUrl: './complaint-detail.component.scss',
})
export class ComplaintDetailComponent {
  selectedStatus: string = 'INPROGRESS'; // Default value
  currentStatus: string = 'INPROGRESS';

  constructor(private router: Router, public modal: NgbModal) {}

  // Handle status change
  onStatusChange(newStatus: string): void {
    let confirmationText = '';
    let successMessage = '';

    switch (newStatus) {
      case 'INPROGRESS':
        confirmationText =
          'Êtes-vous sûr de vouloir changer ce statut en  <b>En cours</b> ?';
        successMessage = 'Plainte en cours !';
        break;
      case 'PENDING':
        confirmationText =
          'Êtes-vous sûr de vouloir changer ce statut en <b>En attente</b> ?';
        successMessage = 'Plainte mise en attente !';
        break;
      case 'RESOLVED':
        confirmationText =
          'Êtes-vous sûr de vouloir <b>résoudre</b> cette réservation ?';
        successMessage = 'Plainte résolu !';
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

  openModal(template: any) {
    this.modal.open(template, {
      centered: true,
      scrollable: true,
    });
  }

  onSave() {
    Swal.fire({
      icon: 'success',
      html: 'Information enregistrée avec succès.',
      showConfirmButton: false,
      timer: 2000,
    }).then(() => {
      this.modal.dismissAll()
    })
  }
}
