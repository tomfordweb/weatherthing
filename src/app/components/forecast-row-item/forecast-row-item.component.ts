import { Component, OnInit, Input } from '@angular/core';
import {
  WeatherState,
  WeatherClean,
  createWeather
} from 'src/app/state/weather';

@Component({
  selector: 'app-forecast-row-item',
  template: `
    <div class="card mb-1">
      <div class="card-body d-flex flex-row">
        <app-forecast-row-detail-item
          *ngIf="weather.date"
          [title]="weather.date.day + ' ' + weather.date.time"
        >
          <img [src]="'/assets/weather-icons/' + weather.icon + '.png'" />
        </app-forecast-row-detail-item>

        <app-forecast-row-detail-item title="Temperature (F)">
          <span class="display-4">{{ weather.temperature }}&deg;</span>
        </app-forecast-row-detail-item>

        <app-forecast-row-detail-item title="Humidity %">
          <span class="display-4">{{ weather.humidity }}%</span>
        </app-forecast-row-detail-item>

        <app-forecast-row-detail-item>
          <span class="text-left">
            <span class="display-5">{{ weather.main }}</span>
            <br />
            {{ weather.description }}
          </span>
        </app-forecast-row-detail-item>
      </div>
    </div>
  `
})
export class ForecastRowItemComponent implements OnInit {
  @Input() weather: WeatherClean = createWeather();

  constructor() {}

  ngOnInit() {}
}
