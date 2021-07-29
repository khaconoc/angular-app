import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {NgZorroAntdModule} from "../../../_base/modules/ng-zorro-antd.module";



@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ]
})
export class HeaderModule { }
