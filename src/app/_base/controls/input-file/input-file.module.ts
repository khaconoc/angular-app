import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFileComponent } from './input-file.component';
import { NzUploadModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    NzUploadModule 
  ],
  exports:[
    InputFileComponent
  ],
  declarations: [InputFileComponent]
})
export class InputFileModule { }
