import { Injectable } from '@angular/core';
import { Chambre, FemmeMenage, StatutChambre } from '../models/menage.model';


@Injectable({
  providedIn: 'root',
})
export class MenageService {
  private chambres: Chambre[] = [
    { id: 1, numero: '101', statut: StatutChambre.A_NETTOYER },
    { id: 2, numero: '102', statut: StatutChambre.EN_COURS },
  ];

  private femmesMenage: FemmeMenage[] = [
    { id: 1, nom: 'Alice', chambresAssignees: [this.chambres[0]] },
  ];

  getChambres(): Chambre[] {
    return this.chambres;
  }

  getFemmesMenage(): FemmeMenage[] {
    return this.femmesMenage;
  }

  updateStatutChambre(chambreId: number, nouveauStatut: StatutChambre): void {
    const chambre = this.chambres.find((c) => c.id === chambreId);
    if (chambre) {
      chambre.statut = nouveauStatut;
    }
  }
}
