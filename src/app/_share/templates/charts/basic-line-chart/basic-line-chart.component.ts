import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-basic-line-chart',
  templateUrl: './basic-line-chart.component.html',
  styleUrls: ['./basic-line-chart.component.scss']
})
export class BasicLineChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    series: [
      {
        type: "line",
        data: [1, 2, 3, 4, 5]
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
