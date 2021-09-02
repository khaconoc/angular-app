import { NgModule } from '@angular/core';
import { TextMorePipe } from './text-more.pipe';
import { DateFormatPipe } from './date-format.pipe';
@NgModule({
  declarations: [
    TextMorePipe,
    DateFormatPipe
  ],
  exports: [
    TextMorePipe,
    DateFormatPipe
  ]
})
export class PipeModule { }
