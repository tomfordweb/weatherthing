import { Component, OnInit, Input } from '@angular/core';
import { WeatherState, WeatherClean } from 'src/app/state/weather';

@Component({
  selector: 'app-forecast-row-item',
  templateUrl: './forecast-row-item.component.html',
  styleUrls: ['./forecast-row-item.component.scss']
})
export class ForecastRowItemComponent implements OnInit {
  @Input() weather: WeatherClean;

  @Input() id: string;

  constructor() {}

  ngOnInit() {}
}
