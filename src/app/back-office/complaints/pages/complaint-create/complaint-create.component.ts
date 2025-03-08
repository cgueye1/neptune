import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-complaint-create',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './complaint-create.component.html',
  styleUrl: './complaint-create.component.scss',
})
export class ComplaintCreateComponent {
  constructor(private router: Router) {}

  onSave() {
    Swal.fire({
      icon: 'success',
      html: 'Plainte soumise avec succès.',
      showConfirmButton: false,
      timer: 2000,
    })
  }

  onReset() {
    // this.router.navigate(['/complaints']);
  }

}
