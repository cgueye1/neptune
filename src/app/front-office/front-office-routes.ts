import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MainPortailComponent } from '../shared/layouts/main-portail/main-portail.component';
import { AllRoomComponent } from './all-room/all-room.component';
import { SingleRoomComponent } from './single-room/single-room.component';
export const frontRoutes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full',
  },
  {
    path: 'accueil',
    component: HomepageComponent,
  },
  {
    path: '',
    component: MainPortailComponent,
    children: [
      {
        path: 'chambres-suites',
        component: AllRoomComponent,
      },
      {
        path: 'chambres-suites/:dataId/detail',
        component: SingleRoomComponent,
      },
      {
        path: '',
        redirectTo: 'accueil',
        pathMatch: 'full',
      },
    ],
  },
];
