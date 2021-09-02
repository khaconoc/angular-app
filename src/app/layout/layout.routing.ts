import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule)},
      {path: 'private', loadChildren: () => import('./private/private.module').then(m => m.PrivateModule)},
    ]
  }
];

export const LayoutRouting = RouterModule.forChild(routes);
