import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutes } from './login.routing';
import { ShareControlsModule } from '../../../_base/controls/share-controls.module';

@NgModule({
  imports: [
    CommonModule,
    ShareControlsModule,
    LoginRoutes,
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
