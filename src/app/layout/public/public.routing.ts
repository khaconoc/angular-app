import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '', component: PublicComponent, children: [
      { path: 'login', loadChildren: () => import('./login/login.module').then(x => x.LoginModule)},
    ]
  },
];

export const PublicRoutes = RouterModule.forChild(routes);
