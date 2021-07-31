import { NgModule } from '@angular/core';
import { InputTextModule } from './input-text/input-text.module';
import { InputNumberModule } from './input-number/input-number.module';
import { InputTextareaModule } from './input-textarea/input-textarea.module';
import { PipeModule } from '../../_share/pipes/pipe.module';

@NgModule({
  exports: [
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    PipeModule
  ]
})

export class ShareControlsModule {
}
