import { Injectable } from '@angular/core';
import { Fourniture } from '../models/approvisionnement.model';


@Injectable({
  providedIn: 'root',
})
export class ApprovisionnementService {
  private fournitures: Fourniture[] = [
    {
      id: 1,
      nom: 'Savon',
      categorie: 'Toilette',
      quantiteEnStock: 100,
      seuilMinimal: 20,
    },
    {
      id: 2,
      nom: 'Serviette',
      categorie: 'Linge',
      quantiteEnStock: 50,
      seuilMinimal: 10,
    },
    {
      id: 2,
      nom: 'Pachets poubelle',
      categorie: 'Produits d\'entretien',
      quantiteEnStock: 5,
      seuilMinimal: 10,
    },
  ];

  getFournitures(): Fourniture[] {
    return this.fournitures;
  }

  reapprovisionnerFourniture(id: number, quantite: number): void {
    const fourniture = this.fournitures.find((f) => f.id === id);
    if (fourniture) {
      fourniture.quantiteEnStock += quantite;
    }
  }
}
