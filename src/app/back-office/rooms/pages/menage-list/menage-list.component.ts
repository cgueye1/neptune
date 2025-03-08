import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Fourniture } from '../../models/approvisionnement.model';
import { ApprovisionnementService } from '../../services/approvisionnement.service';
import { StatusDirective } from '../../../../core/directives/statut.directive';

@Component({
  selector: 'app-menage-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    RouterLink,
    StatusDirective
  ],
  templateUrl: './menage-list.component.html',
  styleUrl: './menage-list.component.scss',
})
export class MenageListComponent implements OnInit {
  fournitures: Fourniture[] = [];
  housekeepers: any[] = [];
  rooms: any[] = [];

  page = 1;
  pageSize = 10;
  collectionSize = DATA.length;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData() {
    this.rooms = DATA.map((room, i) => ({
      id: i + 1,
      ...room,
    })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }

  editRoom(dataId: number) {
    this.router.navigate([dataId, 'detail'], {
      relativeTo: this.activatedRoute,
    });
  }
}

const DATA: any[] = [
  {
    id: 101,
    number: '101',
    checkoutTime: new Date(),
    status: 'NOTDONE',
    housekeepers: { },
  },
  {
    id: 102,
    number: '102',
    checkoutTime: new Date(),
    status: 'DONE',
    housekeepers: { name: 'Marie Diop', availability: true },
  },
  {
    id: 103,
    number: '103',
    checkoutTime: new Date(),
    status: 'INSPECT',
    housekeepers: { name: 'Fama Ndiaye', availability: true },
  },
  {
    id: 104,
    number: '104',
    checkoutTime: new Date(),
    status: 'NOTINSPECT',
    housekeepers: { name: 'Boury Sy', availability: true },
  },
];
