import { Routes, RouterModule } from '@angular/router';
import { SupportElementComponent } from './support-element.component';

const routes: Routes = [
  { path: '', component: SupportElementComponent },
];

export const SupportElementRoutes = RouterModule.forChild(routes);
