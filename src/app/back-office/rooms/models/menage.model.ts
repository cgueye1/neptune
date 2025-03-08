export interface Chambre {
  id: number;
  numero: string;
  statut: StatutChambre;
}

export interface FemmeMenage {
  id: number;
  nom: string;
  chambresAssignees: Chambre[];
}

export enum StatutChambre {
  A_NETTOYER = 'À nettoyer',
  EN_COURS = 'En cours de nettoyage',
  NETTOYEE = 'Nettoyée',
  INSPECTEE = 'Inspectée',
}

