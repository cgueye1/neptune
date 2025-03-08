import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Ibien } from '../../shared/models/bien-model';
import { FormsModule } from '@angular/forms';
import { CardRoomHorizComponent } from '../../shared/components/card-room-horiz/card-room-horiz.component';

@Component({
  selector: 'app-all-room',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, CardRoomHorizComponent],
  templateUrl: './all-room.component.html',
  styleUrl: './all-room.component.scss',
})
export class AllRoomComponent implements OnInit {
  prix: number = 5000000; // Default value, adjust as needed
  minPrix: number = 0;
  maxPrix: number = 1000000000; // Maximum value (1 billion)

  rooms: any[] = [];

  constructor(private location: Location, private router: Router) {}

  goReturn() {
    this.location.back();
  }

  ngOnInit(): void {
    this.getAllBiens();
  }

  onView(data: any) {
     this.router.navigate(['/chambres-suites', data.id, 'detail']);
  }

  formatPrix(value: number): string {
    // Formatting the value for better readability (e.g., 1,000,000,000 FCFA)
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
    }).format(value);
  }

  getAllBiens() {
    this.rooms = [
      {
        id: 'B001',
        title: 'Suite affaires avec vue sur la mer',
        price: '250 000 F CFA',
        location: 'Dakar, Sénégal',
        area: '85m2',
        status: 'RESERVED',
        date: '2024-10-05',
        description:
          'Une chambre de 85 m² avec un lit super King size, toilettes et salle de bain séparées, un vaste salon et un coin salle à manger la rendent très confortable. Repos sur la terrasse privative de 31m² ou dans la baignoire jacuzzi, une suite à vivre selon ses envies.',
        image: 'assets/images/chambres/room1.avif',
      },
      {
        id: 'B002',
        title: 'Villa - Almadies',
        price: '150 000 F CFA',
        location: 'Almadies, Sénégal',
        area: '300m2',
        date: '2024-10-06',
        status: 'AVAILABLE',
        description:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        image: 'assets/images/chambres/room2.avif',
      },
      {
        id: 'B003',
        title: 'Appartement F4 - Mermoz',
        price: '85 000 F CFA',
        location: 'Mermoz, Sénégal',
        area: '150m2',
        date: '2024-10-15',
        status: 'AVAILABLE',
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        image: 'assets/images/chambres/room3.avif',
      },
      {
        id: 'B004',
        title: 'Terrain - Lac Rose',
        price: '75 000 000 F CFA',
        location: 'Lac Rose, Sénégal',
        area: '500m2',
        date: '2024-10-20',
        status: 'AVAILABLE',
        description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
        image: 'assets/images/chambres/room4.avif',
      },
      {
        id: 'B005',
        title: 'Maison - Point E',
        price: '120 000 000 F CFA',
        location: 'Point E, Sénégal',
        area: '250m2',
        date: '2024-10-02',
        status: 'AVAILABLE',
        description:
          'Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc',
        image: 'assets/images/chambres/room5.avif',
      },
    ];
  }

  onViewBien(id: number) {
    this.router.navigate(['/biens', id, 'detail']);
  }
}

