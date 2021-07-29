import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        InputTextComponent
    ],
    exports: [
        InputTextComponent
    ],
    imports: [
        CommonModule,
        NzInputModule,
        NzIconModule,
        FormsModule
    ]
})
export class InputTextModule {
}
