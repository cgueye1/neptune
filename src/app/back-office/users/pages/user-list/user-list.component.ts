import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { StatusDirective } from '../../../../core/directives/statut.directive';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbTypeaheadModule, NgbPaginationModule, StatusDirective],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  page = 1;
  pageSize = 10;
  collectionSize = DATA.length;
  users: any[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData() {
    this.users = DATA.map((user, i) => ({
      id: i + 1,
      ...user,
    })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }

  viewUser(dataId: number) {
    this.router.navigate([dataId, 'detail-user'], {
      relativeTo: this.activatedRoute.parent,
    });
  }

  editUser(dataId: number) {
    this.router.navigate([dataId, 'edit-user'], {
      relativeTo: this.activatedRoute.parent,
    });
  }

  cancelUser(dataId: number) {
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
        this.router.navigate(['/users']);
      }
    });
  }

  onAdd() {
    this.router.navigate(['add-user'], {
      relativeTo: this.activatedRoute.parent,
    });
  }

  formatRoles(roles: {
    canRead: boolean;
    canWrite: boolean;
    canEdit: boolean;
  }): string[] {
    const roleNames = [];
    if (roles.canRead) roleNames.push('Lecture');
    if (roles.canWrite) roleNames.push('Écriture');
    if (roles.canEdit) roleNames.push('Modification');
    return roleNames;
  }

  toggleStatus(data: any) {
    const newStatus = data.status === true ? false : true;
    const confirmationText = newStatus === true ? 'activé' : 'désactivé';

    Swal.fire({
      title: 'Confirmation',
      html: `Voulez-vous vraiment <b>${confirmationText}</b> cet utilisateur ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          html: `Le statut de cet utilisateur a été modifié avec succès`,
          icon: 'success',
          timer: 1500,
          showCancelButton: false,
          showConfirmButton: false,
        });
        this.refreshData();
      }
    });
  }
}

const DATA: any[] = [
  {
    userId: 4,
    firstName: 'Maman',
    lastName: 'Sy',
    phone: '77 000 00 00',
    email: 'axz@example.com',
    profil: ['Supervisor'],
    status: true,
    roles: {
      canRead: true, // Lecture
      canWrite: false, // Écriture
      canEdit: false, // Modification
    },
  },
  {
    userId: 3,
    firstName: 'Maman',
    lastName: 'Sy',
    phone: '77 000 00 00',
    email: 'axz@example.com',
    profil: ['Receptionist'],
    status: true,
    roles: {
      canRead: true, // Lecture
      canWrite: true, // Écriture
      canEdit: false, // Modification
    },
  },
  {
    userId: 2,
    firstName: 'Mamadou',
    lastName: 'Diop',
    phone: '77 000 00 00',
    email: 'axz@example.com',
    profil: ['Client'],
    status: false,
    roles: {
      canRead: true, // Lecture
      canWrite: false, // Écriture
      canEdit: false, // Modification
    },
  },
  {
    userId: 1,
    firstName: 'Fatou',
    lastName: 'Ndiaye',
    phone: '77 000 00 00',
    email: 'axz@example.com',
    profil: ['Client'],
    status: true,
    roles: {
      canRead: true, // Lecture
      canWrite: false, // Écriture
      canEdit: false, // Modification
    },
  },
];
