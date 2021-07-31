import { IconRoutes } from './icon.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    IconRoutes,
    NgZorroAntdModule
  ],
  declarations: [IconComponent]
})
export class IconModule { }
