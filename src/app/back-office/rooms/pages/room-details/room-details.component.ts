import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { StatusDirective } from '../../../../core/directives/statut.directive';

@Component({
  selector: 'app-room-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, StatusDirective],
  templateUrl: './room-details.component.html',
  styleUrl: './room-details.component.scss',
})
export class RoomDetailsComponent {
  selectedImage: string | undefined;
  singleRoom = {
    id: 'B001',
    title: 'Immeuble R+3 - Dakar',
    price: '250 000 000 000 F CFA',
    location: 'Dakar, Sénégal',
    area: '200m2',
    status: 'RESERVED',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    picture: 'assets/images/chambres/room5.avif',
    pictures: [
      'assets/images/chambres/room5.avif',
      'assets/images/chambres/room1.avif',
      'assets/images/chambres/room2.avif',
      'assets/images/chambres/room3.avif',
      'assets/images/chambres/room4.avif',
    ],
  };

  constructor(private router: Router) {}

  editRoom(dataId: number) {
    this.router.navigate(['/rooms', dataId, 'edit-room']);
  }

  onDeleteRoom(id: number) {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Vous ne pourrez pas revenir en arrière!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Supprimé!', 'Chambre supprimée.', 'success');
      }
    });
  }

  showImage(image: string): void {
    if (image !== this.selectedImage) {
      this.selectedImage = image;
    }
  }
}
