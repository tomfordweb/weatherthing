import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { WeatherStore, WeatherState } from './weather.store';

@Injectable({ providedIn: 'root' })
export class WeatherQuery extends Query<WeatherState> {
  getWeather$ = this.select('weather');
  getCity$ = this.select('city');

  constructor(protected store: WeatherStore) {
    super(store);
  }
}
