import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionComponent } from './permission.component';
import { PermissionDirective } from './permission.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    PermissionDirective
  ],
  declarations: [PermissionComponent,
    PermissionDirective
  ]
})
export class PermissionModule { }
