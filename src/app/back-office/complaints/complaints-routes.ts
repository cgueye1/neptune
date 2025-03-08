import { Routes } from '@angular/router';
import { MainComponent } from '../../shared/layouts/main/main.component';
import { ComplaintListComponent } from './pages/complaint-list/complaint-list.component';
import { ComplaintCreateComponent } from './pages/complaint-create/complaint-create.component';
import { ComplaintDetailComponent } from './pages/complaint-detail/complaint-detail.component';

export const complaintsRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: ComplaintListComponent,
      },
      {
        path: 'create-complaint',
        component: ComplaintCreateComponent,
      },
      {
        path: ':dataId/detail-complaint',
        component: ComplaintDetailComponent,
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];
