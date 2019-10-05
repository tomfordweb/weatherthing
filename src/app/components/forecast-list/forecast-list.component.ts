import { Component, OnInit, Input } from '@angular/core';
import { CurrentWeather } from 'src/app/state';

@Component({
  selector: 'app-forecast-list',
  template: `
  <section class="forecast" *ngFor="let block of currentWeather | keyvalue">
    <app-forecast-row-item [weather]="block.value"></app-forecast-row-item>
  </section>`,
  styleUrls: ['./forecast-list.component.scss']
})
export class ForecastListComponent implements OnInit {

  @Input() currentWeather;

  constructor() { }

  ngOnInit() {

  }

}
