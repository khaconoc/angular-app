import { Routes, RouterModule } from '@angular/router';
import { GenCodeComponent } from './gen-code.component';

const routes: Routes = [
  { path: '', component: GenCodeComponent },
];

export const GenCodeRoutes = RouterModule.forChild(routes);
