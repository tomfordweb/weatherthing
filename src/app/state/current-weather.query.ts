import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CurrentWeatherStore, CurrentWeatherState } from './current-weather.store';

@Injectable({ providedIn: 'root' })
export class CurrentWeatherQuery extends QueryEntity<CurrentWeatherState> {

  getCurrent$ = this.getAll();

  constructor(protected store: CurrentWeatherStore) {
    super(store);
  }

}
