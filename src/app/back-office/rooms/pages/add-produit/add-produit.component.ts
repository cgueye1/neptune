import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-produit',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './add-produit.component.html',
  styleUrl: './add-produit.component.scss',
})
export class AddProduitComponent {
  constructor(private router: Router) {}

  onSave() {
    Swal.fire({
      icon: 'success',
      html: 'Produit ajouté avec succès.',
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
