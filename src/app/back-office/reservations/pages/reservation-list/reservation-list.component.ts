import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { StatusDirective } from '../../../../core/directives/statut.directive';

@Component({
  selector: 'app-reservation-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    RouterLink,
    StatusDirective,
  ],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.scss',
})
export class ReservationListComponent implements OnInit {
  page = 1;
  pageSize = 10;
  collectionSize = DATA.length;
  reservations: any[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData() {
    this.reservations = DATA.map((reservation, i) => ({
      id: i + 1,
      ...reservation,
    })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }

  viewReservation(dataId: number) {
    this.router.navigate([dataId, 'detail-reservation'], {
      relativeTo: this.activatedRoute.parent,
    });
  }

  editReservation(dataId: number) {
    this.router.navigate([dataId, 'edit-reservation'], {
      relativeTo: this.activatedRoute.parent,
    });
  }
  
  cancelReservation(dataId: number) {
    Swal.fire({
      title: 'Annulation Réservation',
      text: 'Cette action est irréversible. Êtes-vous sûr de vouloir annuler cette réservation ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmer Annulation!',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Annulation Réservation!', 'Réservation annulée', 'success');
        this.router.navigate(['/reservations']);
      }
    });
  }

  onAdd() {
    this.router.navigate(['add-reservation'], {
      relativeTo: this.activatedRoute.parent,
    });
  }
}

const DATA: any[] = [
  {
    reservationId: 3,
    firstName: 'Maman',
    lastName: 'Sy',
    checkInDate: '2024-10-10',
    checkOutDate: '2024-10-10',
    roomType: 'Simple',
    status: 'PAID',
  },
  {
    reservationId: 2,
    firstName: 'Mamadou',
    lastName: 'Diop',
    checkInDate: '2024-10-10',
    checkOutDate: '2024-10-10',
    roomType: 'Double',
    status: 'CANCELED',
  },
  {
    reservationId: 1,
    firstName: 'Fatou',
    lastName: 'Ndiaye',
    checkInDate: '2024-10-10',
    checkOutDate: '2024-10-10',
    roomType: 'Simple',
    status: 'PENDING',
  },
];
