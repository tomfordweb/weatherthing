import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { WeatherStore } from './weather.store';
import { WeatherState } from './weather.types';

@Injectable({ providedIn: 'root' })
export class WeatherQuery extends Query<WeatherState> {
  getWeather$ = this.select('weather');
  getCity$ = this.select('city');

  constructor(protected store: WeatherStore) {
    super(store);
  }
}
