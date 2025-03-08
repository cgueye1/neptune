import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-produit',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './edit-produit.component.html',
  styleUrl: './edit-produit.component.scss',
})
export class EditProduitComponent {
  constructor(private router: Router) {}

  onSave() {
    Swal.fire({
      icon: 'success',
      html: 'Produit modifié avec succès.',
      showConfirmButton: false,
      timer: 2000,
    }).then(() => {
      this.router.navigate(['/rooms/approvisionnement']);
    });
  }

  onReset() {
    this.router.navigate(['/rooms/approvisionnement']);
  }
}

