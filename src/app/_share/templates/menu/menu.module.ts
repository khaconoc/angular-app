import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import {NgZorroAntdModule} from "../../../_base/modules/ng-zorro-antd.module";

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [
    MenuComponent
  ],
  declarations: [MenuComponent]
})
export class MenuModule { }
