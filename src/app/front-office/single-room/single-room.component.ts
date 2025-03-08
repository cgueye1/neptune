import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-single-room',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './single-room.component.html',
  styleUrl: './single-room.component.scss',
})
export class SingleRoomComponent {
  selectedImage: string | undefined;
  singleRoom = {
    id: 'B001',
    title: 'Suite affaires avec vue sur la mer',
    price: '250 000 F CFA',
    location: 'Dakar, Sénégal',
    area: '85m2',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    picture: 'assets/images/chambres/room1.avif',
    pictures: [
      'assets/images/chambres/room1.avif',
      'assets/images/chambres/room2.avif',
      'assets/images/chambres/room3.avif',
      'assets/images/chambres/room4.avif',
    ],
  };

  constructor(private location: Location, private router: Router) {}

  goReturn() {
    this.location.back();
  }

  onManifest() {
    Swal.fire({
      icon: 'warning',
      title: 'Connectez-vous',
      text: 'Vous devez vous connecter avant de pouvoir réserver!',
      showCancelButton: true,
      confirmButtonText: 'Se connecter',
      cancelButtonText: 'Annuler',
      footer:
        '<p>Vous n\'avez pas de compte ? <a href="/#/auth/register" class="text-link" target="_blank">S\'inscrire</a></p>',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/auth/login']);
      }
    });
  }

  showImage(image: string): void {
    if (image !== this.selectedImage) {
      this.selectedImage = image;
    }
  }
}
