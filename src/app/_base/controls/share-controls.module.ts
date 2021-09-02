import { NgModule } from '@angular/core';
import { InputTextModule } from './input-text/input-text.module';
import { InputNumberModule } from './input-number/input-number.module';
import { InputTextareaModule } from './input-textarea/input-textarea.module';
import { PipeModule } from '../../_share/pipes/pipe.module';
import { RenderErrorsModule } from './render-errors/render-errors.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagingModule } from './paging/paging.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { InputDateModule } from './input-date/input-date.module';
import { InputCheckBoxModule } from './input-check-box/input-check-box.module';
import { InputFloatModule } from './input-float/input-float.module';
import { InputSelectModule } from './input-select/input-select.module';
import { InputSelectMultipleModule } from './input-select-multiple/input-select-multiple.module';
import { InputSelectApiModule } from './input-select-api/input-select-api.module';
import { InputSelectMultipleApiModule } from './input-select-multiple-api/input-select-multiple-api.module';
import { InputRadioModule } from './input-radio/input-radio.module';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    // NzFormModule,
    NzDividerModule,
    NzSpinModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    InputDateModule,
    InputCheckBoxModule,
    InputFloatModule,
    InputSelectModule,
    InputSelectMultipleModule,
    InputSelectApiModule,
    InputSelectMultipleApiModule,
    InputRadioModule,
    PipeModule,
    PagingModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    // NzFormModule,
    NzDividerModule,
    NgZorroAntdModule,
    NzSpinModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    InputDateModule,
    InputCheckBoxModule,
    InputFloatModule,
    InputSelectModule,
    InputSelectMultipleModule,
    InputSelectApiModule,
    InputSelectMultipleApiModule,
    InputRadioModule,
    RenderErrorsModule,
    PipeModule,
    PagingModule,
  ]
})
export class ShareControlsModule {}
