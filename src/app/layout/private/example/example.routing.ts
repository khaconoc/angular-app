import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './example.component';

const routes: Routes = [
  {
    path: '', component: ExampleComponent, children: [
      { path: 'icon', loadChildren: () => import('./icon/icon.module').then(x => x.IconModule)},
      { path: 'crud', loadChildren: () => import('./crud/crud.module').then(x => x.CrudModule)},
      { path: 'docs-backend', loadChildren: () => import('./docs-backend/docs-backend.module').then(x => x.DocsBackendModule)},
    ]
  },
];

export const ExampleRoutes = RouterModule.forChild(routes);
