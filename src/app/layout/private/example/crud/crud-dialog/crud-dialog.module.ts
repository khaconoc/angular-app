import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudDialogComponent } from './crud-dialog.component';
import { ShareControlsModule } from '../../../../../_base/controls/share-controls.module';

@NgModule({
  imports: [
    CommonModule,
    ShareControlsModule
  ],
  declarations: [CrudDialogComponent]
})
export class CrudDialogModule { }
