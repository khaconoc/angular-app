import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountPermissionComponent } from './account-permission.component';
import { AccountPermissionRoutes } from './account-permission.routing';

@NgModule({
  imports: [
    CommonModule,
    AccountPermissionRoutes
  ],
  declarations: [AccountPermissionComponent]
})
export class AccountPermissionModule { }
