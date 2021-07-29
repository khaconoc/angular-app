import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {BasicLineChartModule} from "../../_share/templates/charts/basic-line-chart/basic-line-chart.module";
import {BasicColumnChartModule} from "../../_share/templates/charts/basic-column-chart/basic-column-chart.module";



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    BasicLineChartModule,
    BasicColumnChartModule
  ]
})
export class DashboardModule { }
