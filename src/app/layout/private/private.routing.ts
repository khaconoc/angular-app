import { Routes, RouterModule } from '@angular/router';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  { path: '', component: PrivateComponent, children: [
      {path: 'account', loadChildren: () => import('./account/account.module').then(x => x.AccountModule)},
      {path: 'gen-code', loadChildren: () => import('./gen-code/gen-code.module').then(x => x.GenCodeModule)},
      {path: 'example', loadChildren: () => import('./example/example.module').then(x => x.ExampleModule)},
    ] },
];

export const PrivateRoutes = RouterModule.forChild(routes);
