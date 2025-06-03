import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/home/home-page/home-page.component').then(
        (m) => m.HomePageComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/register/register-page/register-page.component').then(
        (m) => m.RegisterPageComponent
      ),
  },
  { path: '**', redirectTo: '' },
];
