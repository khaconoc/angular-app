import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { PrivateRoutes } from './private.routing';

@NgModule({
  imports: [
    CommonModule,
    PrivateRoutes
  ],
  declarations: [PrivateComponent]
})
export class PrivateModule { }
