import { Route } from '@angular/router';

export const APP_ROUTES: Route[] = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./back-office/dashboard/dashboard-routes').then(
        (routes) => routes.dashboardRoutes
      ),
  },
  {
    path: 'reservations',
    loadChildren: () =>
      import('./back-office/reservations/reservations-routes').then(
        (m) => m.reservationsRoutes
      ),
  },
  {
    path: 'tarifications',
    loadChildren: () =>
      import('./back-office/tarifications/tarifications-routes').then(
        (m) => m.tarificationsRoutes
      ),
  },
  {
    path: 'complaints',
    loadChildren: () =>
      import('./back-office/complaints/complaints-routes').then(
        (m) => m.complaintsRoutes
      ),
  },
  {
    path: 'rooms',
    loadChildren: () =>
      import('./back-office/rooms/rooms-routes').then((m) => m.roomsRoutes),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./back-office/users/users-routes').then((m) => m.usersRoutes),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./back-office/settings/settings-routes').then(
        (routes) => routes.settingsRoutes
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./back-office/auth/auth-routes').then(
        (routes) => routes.authRoutes
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./front-office/front-office-routes').then(
        (routes) => routes.frontRoutes
      ),
  },
];
