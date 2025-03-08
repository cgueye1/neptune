import { Routes } from '@angular/router';
import { TarificationListComponent } from './pages/tarification-list/tarification-list.component';
import { TarificationCreateComponent } from './pages/tarification-create/tarification-create.component';
import { TarificationEditComponent } from './pages/tarification-edit/tarification-edit.component';
import { TarificationDetailComponent } from './pages/tarification-detail/tarification-detail.component';
import { MainComponent } from '../../shared/layouts/main/main.component';

export const tarificationsRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: TarificationListComponent,
      },
      {
        path: 'create-tarification',
        component: TarificationCreateComponent,
      },
      {
        path: ':dataId/edit-tarification',
        component: TarificationEditComponent,
      },
      {
        path: ':dataId/detail-tarification',
        component: TarificationDetailComponent,
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];
