import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArrayComponent } from './form-array.component';
import { FormArrayRoutes } from './form-array.routing';
import { ShareControlsModule } from '../../../../_base/controls/share-controls.module';

@NgModule({
  imports: [
    CommonModule,
    ShareControlsModule,
    FormArrayRoutes,
  ],
  declarations: [FormArrayComponent]
})
export class FormArrayModule { }
