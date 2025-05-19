import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./public/pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'bundles',
    loadComponent: () =>
      import('./public/pages/bundles/bundles.component').then(
        (m) => m.BundlesComponent
      ),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
