import { Routes } from '@angular/router';
import { MainComponent } from '../../shared/layouts/main/main.component';
import { ReservationListComponent } from './pages/reservation-list/reservation-list.component';
import { ReservationDetailComponent } from './pages/reservation-detail/reservation-detail.component';
import { RoomAssignmentComponent } from './pages/room-assignment/room-assignment.component';
import { ReservationEditComponent } from './pages/reservation-edit/reservation-edit.component';
import { ReservationCreateComponent } from './pages/reservation-create/reservation-create.component';
import { ReservationHomeComponent } from './pages/reservation-home/reservation-home.component';
import { SalleReunionListComponent } from './pages/salle-reunion-list/salle-reunion-list.component';
import { SalleReunionCreateComponent } from './pages/salle-reunion-create/salle-reunion-create.component';
import { SalleReunionEditComponent } from './pages/salle-reunion-edit/salle-reunion-edit.component';

export const reservationsRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: ReservationHomeComponent,
      },
      {
        path: 'list',
        component: ReservationListComponent,
      },
      {
        path: 'add-reservation',
        component: ReservationCreateComponent,
      },
      {
        path: ':dataId/edit-reservation',
        component: ReservationEditComponent,
      },
      {
        path: ':dataId/detail-reservation',
        component: ReservationDetailComponent,
      },
      {
        path: 'room-assignment',
        component: RoomAssignmentComponent,
      },
      {
        path: 'salles-de-reunion',
        component: SalleReunionListComponent,
      },
      {
        path: 'salles-de-reunion/create',
        component: SalleReunionCreateComponent,
      },
      {
        path: 'salles-de-reunion/:data/edit',
        component: SalleReunionEditComponent,
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];
