import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { StatusDirective } from '../../../../core/directives/statut.directive';

@Component({
  selector: 'app-complaint-list',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbTypeaheadModule, NgbPaginationModule,StatusDirective],
  templateUrl: './complaint-list.component.html',
  styleUrl: './complaint-list.component.scss',
})
export class ComplaintListComponent implements OnInit {
  page = 1;
  pageSize = 10;
  collectionSize = DATA.length;
  complaints: any[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData() {
    this.complaints = DATA.map((user, i) => ({
      id: i + 1,
      ...user,
    })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }

  viewComplaint(dataId: number) {
    this.router.navigate([dataId, 'detail-complaint'], {
      relativeTo: this.activatedRoute.parent,
    });
  }
}

const DATA: any[] = [
  {
    complaintId: 4,
    firstName: 'Maman',
    lastName: 'Sy',
    dateSubmitted: '2024-10-10',
    complaintType: ['Entretien ménager'],
    status: 'INPROGRESS',
  },
  {
    complaintId: 3,
    firstName: 'Maman',
    lastName: 'Sy',
    dateSubmitted: '2024-10-10',
    complaintType: ['Entretien ménager'],
    status: 'RESOLVED',
  },
  {
    complaintId: 2,
    firstName: 'Mamadou',
    lastName: 'Diop',
    dateSubmitted: '2024-10-10',
    complaintType: ['Entretien ménager'],
    status: 'PENDING',
  },
  {
    complaintId: 1,
    firstName: 'Fatou',
    lastName: 'Ndiaye',
    dateSubmitted: '2024-10-10',
    complaintType: ['Facturation'],
    status: 'RESOLVED',
  },
];

