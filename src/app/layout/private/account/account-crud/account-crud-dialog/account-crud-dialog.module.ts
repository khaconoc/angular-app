import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountCrudDialogComponent } from './account-crud-dialog.component';
import { ShareControlsModule } from '../../../../../_base/controls/share-controls.module';

@NgModule({
  imports: [
    CommonModule,
    ShareControlsModule
  ],
  declarations: [AccountCrudDialogComponent]
})
export class AccountCrudDialogModule { }
