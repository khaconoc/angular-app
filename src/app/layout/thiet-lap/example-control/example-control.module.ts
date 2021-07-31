import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleControlComponent } from './example-control.component';
import { ExampleControlRouting } from './example-control.routing';
import { ShareControlsModule } from '../../../_base/controls/share-controls.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ExampleControlDialogModule } from './example-control-dialog/example-control-dialog.module';
import { RenderErrorsModule } from '../../../_base/controls/render-errors/render-errors.module';

@NgModule({
  declarations: [
    ExampleControlComponent
  ],
  imports: [
    CommonModule,
    ExampleControlRouting,
    ShareControlsModule,
    FormsModule,
    NzDividerModule,
    ReactiveFormsModule,
    NzFormModule,
    NgZorroAntdModule,
    ExampleControlDialogModule,
    RenderErrorsModule,
  ]
})
export class ExampleControlModule { }
