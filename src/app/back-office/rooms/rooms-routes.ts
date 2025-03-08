import { Routes } from '@angular/router';
import { MainComponent } from '../../shared/layouts/main/main.component';
import { RoomListComponent } from './pages/room-list/room-list.component';
import { RoomCreateComponent } from './pages/room-create/room-create.component';
import { RoomEditComponent } from './pages/room-edit/room-edit.component';
import { RoomDetailsComponent } from './pages/room-details/room-details.component';
import { RoomHomeComponent } from './pages/room-home/room-home.component';
import { ApprovisionnementListComponent } from './pages/approvisionnement-list/approvisionnement-list.component';
import { AddProduitComponent } from './pages/add-produit/add-produit.component';
import { EditProduitComponent } from './pages/edit-produit/edit-produit.component';
import { MenageListComponent } from './pages/menage-list/menage-list.component';
import { MenageDetailComponent } from './pages/menage-detail/menage-detail.component';

export const roomsRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: RoomHomeComponent,
      },
      {
        path: 'list',
        component: RoomListComponent,
      },
      {
        path: 'create-room',
        component: RoomCreateComponent,
      },
      {
        path: ':dataId/edit-room',
        component: RoomEditComponent,
      },
      {
        path: ':dataId/detail-room',
        component: RoomDetailsComponent,
      },

      {
        path: 'approvisionnement',
        component: ApprovisionnementListComponent,
      },
      {
        path: 'approvisionnement/add-produit',
        component: AddProduitComponent,
      },
      {
        path: 'approvisionnement/:dataId/edit-produit',
        component: EditProduitComponent,
      },

      {
        path: 'menages',
        component: MenageListComponent,
      },
      {
        path: 'menages/:dataId/detail',
        component: MenageDetailComponent,
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];
