import { Component, OnInit, Input } from '@angular/core';
import { WeatherState, WeatherClean } from 'src/app/state/weather';

@Component({
  selector: 'app-forecast-row-item',
  template: `
    <div class="card mb-1">
      <div class="card-body d-flex flex-row">
        <app-forecast-row-detail-item
          [title]="weather.date.day + ' ' + weather.date.time"
        >
          <img [src]="'/assets/weather-icons/' + weather.icon + '.png'" />
        </app-forecast-row-detail-item>

        <app-forecast-row-detail-item title="Temperature (F)">
          {{ weather.temperature }}&deg;
        </app-forecast-row-detail-item>

        <app-forecast-row-detail-item title="Humidity %">
          {{ weather.humidity }}%
        </app-forecast-row-detail-item>
      </div>
    </div>
  `
})
export class ForecastRowItemComponent implements OnInit {
  @Input() weather: WeatherClean;

  constructor() {}

  ngOnInit() {
    console.log(this.weather);
  }
}
