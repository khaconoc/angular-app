import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-basic-column-chart',
  templateUrl: './basic-column-chart.component.html',
  styleUrls: ['./basic-column-chart.component.scss']
})
export class BasicColumnChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {

  };
  constructor() { }

  ngOnInit(): void {
  }

}
