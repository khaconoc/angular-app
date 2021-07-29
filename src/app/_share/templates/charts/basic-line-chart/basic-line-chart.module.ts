import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLineChartComponent } from './basic-line-chart.component';
import {HighchartsChartModule} from "highcharts-angular";



@NgModule({
    declarations: [
        BasicLineChartComponent
    ],
    exports: [
        BasicLineChartComponent
    ],
    imports: [
        CommonModule,
        HighchartsChartModule
    ]
})
export class BasicLineChartModule { }
