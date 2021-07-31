import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleControlDialogComponent } from './example-control-dialog.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ShareControlsModule } from '../../../../_base/controls/share-controls.module';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  imports: [
    CommonModule,
    ShareControlsModule,
    FormsModule,
    NzDividerModule,
    ReactiveFormsModule,
    NzFormModule,
    NgZorroAntdModule,
  ],
  declarations: [ExampleControlDialogComponent],
})
export class ExampleControlDialogModule { }
