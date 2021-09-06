import { Routes, RouterModule } from '@angular/router';
import { FormArrayComponent } from './form-array.component';

const routes: Routes = [
  { path: '', component: FormArrayComponent },
];

export const FormArrayRoutes = RouterModule.forChild(routes);
