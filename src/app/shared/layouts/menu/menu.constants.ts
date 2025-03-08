export interface IMenu {
  menId: number;
  menPath: string;
  menTitle: string;
  menIconType: string;
  type: "link" | "sub";
  childrens?: {
    menId: number;
    menPath: string;
    menTitle: string;
  }[];
  roles:string[]
}

export const MENU_ITEMS: IMenu[] = [
  {
    menId: 1,
    menTitle: 'Tableau de bord',
    menPath: '/dashboard',
    menIconType: 'home',
    type: 'link',
    childrens: [],
    roles: [],
  },
  {
    menId: 2,
    menTitle: 'Gestion des Réservations',
    menPath: '/reservations',
    menIconType: 'bedroom_parent',
    type: 'link',
    childrens: [],
    roles: [],
  },
  {
    menId: 3,
    menTitle: 'Gestion des Utilisateurs',
    menPath: '/users',
    menIconType: 'group',
    type: 'link',
    childrens: [],
    roles: [],
  },
  {
    menId: 4,
    menTitle: 'Gestion des Plaintes',
    menPath: '/complaints',
    menIconType: 'tab',
    type: 'link',
    childrens: [],
    roles: [],
  },
  {
    menId: 5,
    menTitle: 'Faire une plainte',
    menPath: '/complaints/create-complaint',
    menIconType: 'edit_note',
    type: 'link',
    childrens: [],
    roles: ['Client'],
  },
  {
    menId: 6,
    menTitle: 'Chambres et Ménage',
    menPath: '/rooms',
    menIconType: 'bedroom_parent',
    type: 'link',
    childrens: [],
    roles: ['Client'],
  },
  {
    menId: 7,
    menTitle: 'Tarifications',
    menPath: '/tarifications',
    menIconType: 'money',
    type: 'link',
    childrens: [],
    roles: ['Admin'],
  },
];
