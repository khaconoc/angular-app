import { IconRoutes } from './icon.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [
    CommonModule,
    NzIconModule,
    IconRoutes
  ],
  declarations: [IconComponent]
})
export class IconModule { }
