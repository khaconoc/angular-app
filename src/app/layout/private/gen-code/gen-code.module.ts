import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenCodeComponent } from './gen-code.component';
import { GenCodeRoutes } from './gen-code.routing';
import { ShareControlsModule } from '../../../_base/controls/share-controls.module';

@NgModule({
  imports: [
    CommonModule,
    ShareControlsModule,
    GenCodeRoutes
  ],
  declarations: [GenCodeComponent]
})
export class GenCodeModule { }
