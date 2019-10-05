import { Component, OnInit, Input } from '@angular/core';
import { CurrentWeather } from 'src/app/state';

@Component({
  selector: 'app-forecast-row-item',
  templateUrl: './forecast-row-item.component.html',
  styleUrls: ['./forecast-row-item.component.scss']
})
export class ForecastRowItemComponent implements OnInit {

  @Input() weather:CurrentWeather;

  @Input() id:string;

  constructor() { }

  ngOnInit() {
    console.log(this.weather);
  }

}
