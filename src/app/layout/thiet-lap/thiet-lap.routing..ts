import { RouterModule, Routes } from "@angular/router";
import { ThietLapComponent } from "./thiet-lap.component";

const routes: Routes = [
  {
    path: '', component: ThietLapComponent, children: [
      {
        path: 'example-control',
        loadChildren: () => import('./example-control/example-control.module').then(m => m.ExampleControlModule)
      },
    ]
  }
]

export const ThietLapRouting = RouterModule.forChild(routes);
