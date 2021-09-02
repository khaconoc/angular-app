import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';

const routes: Routes = [
  {
    path: '', component: AccountComponent, children: [
      {
        path: 'account-crud',
        loadChildren: () => import('./account-crud/account-crud.module').then(x => x.AccountCrudModule)
      },
      {
        path: 'account-permission',
        loadChildren: () => import('./account-permission/account-permission.module').then(x => x.AccountPermissionModule)
      },
    ]
  },
];

export const AccountRoutes = RouterModule.forChild(routes);
