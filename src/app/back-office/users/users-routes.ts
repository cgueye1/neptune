import { Routes } from '@angular/router';
import { MainComponent } from '../../shared/layouts/main/main.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserCreateComponent } from './pages/user-create/user-create.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';

export const usersRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: UserListComponent,
      },
      {
        path: 'add-user',
        component: UserCreateComponent,
      },
      {
        path: ':dataId/edit-user',
        component: UserEditComponent,
      },
      {
        path: ':dataId/detail-user',
        component: UserDetailComponent,
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];
