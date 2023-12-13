import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/buttons',
    pathMatch: 'full',
  },
  {
    path: 'buttons',
    loadComponent: () =>
      import('./example-buttons/example-buttons.component').then(
        (mod) => mod.ExampleButtonsComponent
      ),
  },
  {
    path: 'select',
    loadComponent: () =>
      import('./example-select/example-select.component').then(
        (mod) => mod.ExampleSelectComponent
      ),
  },
];
