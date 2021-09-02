import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountCrudComponent } from './account-crud.component';
import { AccountCrudRoutes } from './account-crud.routing';
import { ShareControlsModule } from '../../../../_base/controls/share-controls.module';
import { AccountCrudDialogModule } from './account-crud-dialog/account-crud-dialog.module';

@NgModule({
  imports: [
    CommonModule,
    ShareControlsModule,
    AccountCrudDialogModule,
    AccountCrudRoutes,
  ],
  declarations: [AccountCrudComponent]
})
export class AccountCrudModule { }
