import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { ShareControlsModule } from '../../../_base/controls/share-controls.module';



@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule,
    ShareControlsModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [HeaderComponent]
})
export class HeaderModule { }
