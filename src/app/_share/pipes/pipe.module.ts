import { NgModule } from '@angular/core';
import { TextMorePipe } from './text-more.pipe';
@NgModule({
  declarations: [
    TextMorePipe
  ],
  exports: [
    TextMorePipe
  ]
})
export class PipeModule { }
