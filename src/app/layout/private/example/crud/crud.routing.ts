import { Routes, RouterModule } from '@angular/router';
import { CrudComponent } from './crud.component';

const routes: Routes = [
  { path: '', component: CrudComponent },
];

export const CrudRoutes = RouterModule.forChild(routes);
