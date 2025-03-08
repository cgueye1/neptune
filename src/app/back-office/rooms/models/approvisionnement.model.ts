export interface Fourniture {
  id: number;
  nom: string;
  categorie: string;
  quantiteEnStock: number;
  seuilMinimal: number;
}

export interface Commande {
  id: number;
  dateCommande: Date;
  fournisseur: string;
  produits: Fourniture[];
  statut: string;
}
