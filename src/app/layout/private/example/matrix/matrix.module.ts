import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatrixComponent } from './matrix.component';
import { MatrixRoutes } from './matrix.routing';
import { ShareControlsModule } from '../../../../_base/controls/share-controls.module';

@NgModule({
  imports: [
    CommonModule,
    MatrixRoutes,
    ShareControlsModule,
  ],
  declarations: [MatrixComponent]
})
export class MatrixModule { }
