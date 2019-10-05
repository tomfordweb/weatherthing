import { Component, OnInit, Input } from '@angular/core';
import { WeatherClean } from 'src/app/state/weather';

@Component({
  selector: 'app-forecast-list',
  template: `
    <section class="forecast" *ngIf="weather">
      <app-forecast-row-item
        *ngFor="let weather of weather"
        [weather]="weather"
      ></app-forecast-row-item>
    </section>
  `
})
export class ForecastListComponent implements OnInit {
  @Input() weather: WeatherClean[];

  constructor() {}

  ngOnInit() {}
}
