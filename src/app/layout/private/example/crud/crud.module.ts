import { CrudRoutes } from './crud.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud.component';
import { ShareControlsModule } from '../../../../_base/controls/share-controls.module';
import { CrudDialogModule } from './crud-dialog/crud-dialog.module';

@NgModule({
  imports: [
    CommonModule,
    ShareControlsModule,
    CrudDialogModule,
    CrudRoutes,
  ],
  declarations: [CrudComponent]
})
export class CrudModule { }
