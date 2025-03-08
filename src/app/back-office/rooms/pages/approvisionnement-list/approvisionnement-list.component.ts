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

@Component({
  selector: 'app-approvisionnement-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    RouterLink,
  ],
  templateUrl: './approvisionnement-list.component.html',
  styleUrl: './approvisionnement-list.component.scss',
})
export class ApprovisionnementListComponent implements OnInit {
  fournitures: Fourniture[] = [];

  page = 1;
  pageSize = 10;
  collectionSize = DATA.length;
  reservations: any[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private approvisionnementService: ApprovisionnementService
  ) {}

  ngOnInit(): void {
    this.refreshData();
    this.fournitures = this.approvisionnementService.getFournitures();
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

  editProduit(dataId: number) {
    this.router.navigate([dataId, 'edit-produit'], {
      relativeTo: this.activatedRoute,
    });
  }

  onAdd() {
    this.router.navigate(['add-produit'], {
      relativeTo: this.activatedRoute,
    });
  }

  reapprovisionner(id: number, quantite: number): void {
     Swal.fire({
       title: 'Réapprovisionnement',
       text: 'Êtes-vous sûr de vouloir réapprovisionner 10 unités ?',
       icon: 'warning',
       showCancelButton: true,
       confirmButtonText: 'Confirmer',
       cancelButtonText: 'Annuler',
     }).then((result) => {
       if (result.isConfirmed) {
         Swal.fire(
           'Réapprovisionnement',
           `La fourniture a été réapprovisionnée avec succès de ${quantite} unités.`,
           'success'
         );
          this.approvisionnementService.reapprovisionnerFourniture(
            id,
            quantite
          );
          this.fournitures = this.approvisionnementService.getFournitures();
       }
     });

  }
}

const DATA: any[] = [
  {
    produitId: 5,
    nomProduit: 'Savon liquide 100 ml',
    categorie: 'Savons',
    quantiteStock: 4,
    quantiteMinimale: 2,
    status: 'sufficient', //suffisant
  },
  {
    produitId: 4,
    nomProduit: 'Serviettes',
    categorie: 'Linge',
    quantiteStock: 12,
    quantiteMinimale: 2,
    status: 'sufficient', //suffisant
  },
  {
    produitId: 3,
    nomProduit: 'Pachets poubelle',
    categorie: "Produits d'entretien",
    quantiteStock: 20,
    quantiteMinimale: 1,
    status: 'sufficient', //suffisant
  },
  {
    produitId: 2,
    nomProduit: 'Shampoings',
    categorie: 'Savons',
    quantiteStock: 1,
    quantiteMinimale: 1,
    status: 'weak', //faible
  },
  {
    produitId: 1,
    nomProduit: 'Brosses à dents',
    categorie: 'Savons',
    quantiteStock: 1,
    quantiteMinimale: 1,
    status: 'critical', //critique
  },
];
