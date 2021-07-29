import { NgModule } from '@angular/core';
import { InputTextModule } from './input-text/input-text.module';
import { InputNumberModule } from './input-number/input-number.module';

@NgModule({
    exports: [
        InputTextModule,
        InputNumberModule
    ]
})
export class ShareControlsModule {
}
