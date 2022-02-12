import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const URLGlb = 'https://icy-rock-015a79e10.1.azurestaticapps.net/remoteEntry.js';
const URLEdu = 'http://localhost:3002/remoteEntry.js';

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'globais',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: URLGlb,
        exposedModule: './Module',
      }).then((m) => m.InteropModule),
  },
  {
    path: 'educacional',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: URLEdu,
        exposedModule: './Module',
      }).then((m) => m.InteropModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
