import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarification-list',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbTypeaheadModule, NgbPaginationModule],
  templateUrl: './tarification-list.component.html',
  styleUrl: './tarification-list.component.scss',
})
export class TarificationListComponent implements OnInit {
  page = 1;
  pageSize = 10;
  collectionSize = DATA.length;
  pricingList: any[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData() {
    this.pricingList = DATA.map((user, i) => ({
      id: i + 1,
      ...user,
    })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }

  onAddPricing() {
    this.router.navigate(['/tarifications/create-tarification']);
  }

  onEditPricing(dataId: number) {
    this.router.navigate([dataId, 'edit-tarification'], {
      relativeTo: this.activatedRoute.parent,
    });
  }
  onViewPricing(dataId: number) {
    this.router.navigate([dataId, 'detail-tarification'], {
      relativeTo: this.activatedRoute.parent,
    });
  }
  onDeletePricing(dataId: number) {
     Swal.fire({
       title: 'Suppression',
       text: 'Cette action est irréversible. Êtes-vous sûr de vouloir supprimer cette tarification ?',
       icon: 'warning',
       showCancelButton: true,
       confirmButtonText: 'Confirmer',
       cancelButtonText: 'Annuler',
     }).then((result) => {
       if (result.isConfirmed) {
         this.pricingList = this.pricingList.filter(
           (pricing) => pricing.id !== dataId
         );
         Swal.fire('Suppression!', 'Tarification supprimée', 'success').then(() => {
           this.router.navigate(['/tarifications']);
         });
       }
     });
  }
}

const DATA: any[] = [
  {
    id: 1,
    roomType: 'Standard',
    basePrice: 50000,
    dayRate: 45000,
    nightRate: 55000,
    weekendRate: 60000,
    peakSeasonRate: 70000,
    offPeakRate: 40000,
    longStayDiscount: 10,
    earlyBirdDiscount: 5,
  },
  {
    id: 2,
    roomType: 'Suite',
    basePrice: 100000,
    dayRate: 95000,
    nightRate: 110000,
    weekendRate: 120000,
    peakSeasonRate: 140000,
    offPeakRate: 90000,
    longStayDiscount: 15,
    earlyBirdDiscount: 10,
  },
];
