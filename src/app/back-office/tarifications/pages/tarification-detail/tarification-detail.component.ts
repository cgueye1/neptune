import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarification-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './tarification-detail.component.html',
  styleUrl: './tarification-detail.component.scss',
})
export class TarificationDetailComponent {


  constructor(private router: Router) {}

  editTarif(dataId: number) {
    this.router.navigate(['/tarifications', dataId, 'edit-tarification']);
  }

  onDeleteTarif(id: number) {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Vous ne pourrez pas revenir en arrière!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Supprimé!', 'Tarif supprimée.', 'success');
      }
    });
  }

}
