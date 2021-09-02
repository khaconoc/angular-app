import { Routes, RouterModule } from '@angular/router';
import { AccountCrudComponent } from './account-crud.component';

const routes: Routes = [
  { path: '', component: AccountCrudComponent },
];

export const AccountCrudRoutes = RouterModule.forChild(routes);
