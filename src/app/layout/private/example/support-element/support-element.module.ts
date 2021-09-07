import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportElementComponent } from './support-element.component';
import { SupportElementRoutes } from './support-element.routing';
import { ShareControlsModule } from '../../../../_base/controls/share-controls.module';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  imports: [
    CommonModule,
    SupportElementRoutes,
    ShareControlsModule,
    NzSpaceModule,
    NzButtonModule
  ],
  declarations: [SupportElementComponent]
})
export class SupportElementModule { }
