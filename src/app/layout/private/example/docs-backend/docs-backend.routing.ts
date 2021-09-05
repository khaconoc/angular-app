import { Routes, RouterModule } from '@angular/router';
import { DocsBackendComponent } from './docs-backend.component';

const routes: Routes = [
  { path: '', component: DocsBackendComponent },
];

export const DocsBackendRoutes = RouterModule.forChild(routes);
