import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicColumnChartComponent} from './basic-column-chart.component';
import {HighchartsChartModule} from "highcharts-angular";


@NgModule({
  declarations: [
    BasicColumnChartComponent
  ],
  exports: [
    BasicColumnChartComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule
  ]
})
export class BasicColumnChartModule {
}
