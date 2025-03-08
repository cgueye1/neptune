import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from './app.routes';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      BrowserModule,
      RouterModule.forRoot(APP_ROUTES, {
        useHash: true,
        scrollOffset: [0, 0],
        scrollPositionRestoration: 'enabled',
      })
    ),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
  ],
};
