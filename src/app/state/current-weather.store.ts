import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { CurrentWeather } from './current-weather.model';

export interface CurrentWeatherState extends EntityState<CurrentWeather> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'currentWeather' })
export class CurrentWeatherStore extends EntityStore<CurrentWeatherState> {

  constructor() {
    super();
  }

}

