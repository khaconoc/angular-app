import { Routes, RouterModule } from '@angular/router';
import { AccountPermissionComponent } from './account-permission.component';

const routes: Routes = [
  { path: '', component: AccountPermissionComponent },
];

export const AccountPermissionRoutes = RouterModule.forChild(routes);
