import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from '../_share/services/auth.guard';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule)},
      { path: 'private',
        canActivate: [AuthGuard],
        loadChildren: () => import('./private/private.module').then(m => m.PrivateModule)},
    ]
  }
];

export const LayoutRouting = RouterModule.forChild(routes);
