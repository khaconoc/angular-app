import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThietLapComponent } from './thiet-lap.component';
import { ThietLapRouting } from "./thiet-lap.routing.";



@NgModule({
  declarations: [
    ThietLapComponent
  ],
  imports: [
    CommonModule,
    ThietLapRouting
  ]
})
export class ThietLapModule { }
