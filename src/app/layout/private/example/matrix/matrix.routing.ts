import { Routes, RouterModule } from '@angular/router';
import { MatrixComponent } from './matrix.component';

const routes: Routes = [
  { path: '', component: MatrixComponent },
];

export const MatrixRoutes = RouterModule.forChild(routes);
