import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  {path: '', component: PageNotFoundComponent}
];

export const PageNotFoundRouters = RouterModule.forChild(routes);
