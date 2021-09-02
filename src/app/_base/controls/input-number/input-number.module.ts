import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNumberComponent } from './input-number.component';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NzInputNumberModule,
    TextMaskModule,
    NzIconModule,
    NzInputModule
  ],
  exports: [
    InputNumberComponent
  ],
  declarations: [InputNumberComponent]
})
export class InputNumberModule { }
