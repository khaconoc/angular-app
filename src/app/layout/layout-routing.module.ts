import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from './layout.component';

const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
      {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
      {path: 'thiet-lap', loadChildren: () => import('./thiet-lap/thiet-lap.module').then(m => m.ThietLapModule)},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutRoutingModule {
}
