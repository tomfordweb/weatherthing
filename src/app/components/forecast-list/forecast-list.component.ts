import { Component, OnInit, Input } from '@angular/core';
import { WeatherClean } from 'src/app/state/weather';

@Component({
  selector: 'app-forecast-list',
  template: `
    <section class="forecast" *ngFor="let weather of weather">
      <app-forecast-row-item [weather]="weather"></app-forecast-row-item>
    </section>
  `,
  styleUrls: ['./forecast-list.component.scss']
})
export class ForecastListComponent implements OnInit {
  @Input() weather: WeatherClean;

  constructor() {}

  ngOnInit() {}
}
