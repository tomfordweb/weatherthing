import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import * as moment from 'moment';
import { OpenWeatherRaw, WeatherState } from '.';

export function createInitialState(
  props: OpenWeatherRaw | any = null
): WeatherState {
  const r = {
    weather: null,
    city: null
  };

  if (props.city) {
    r.city = props.city;
  }
  if (props.list && props.list.length) {
    const weatherClean = props.list.map(item => {
      if (item.weather) {
        const now = moment(item.dt_txt);

        const date = {
          iso: item.dt,
          time: now.format('hA'),
          minutes: now.format('MM'),
          day: now.format('dddd'),
          month: now.format('F'),
          year: now.format('YYYY')
        };

        const weather = {
          groundLevel: item.main.grnd_level,
          humidity: item.main.humidity,
          pressure: item.main.pressure,
          temperature: Math.round(item.main.temp),
          seaLevel: item.main.sea_level,
          // weather: item.weather,
          ...item.weather[0]
        };

        return {
          date,
          ...weather
        };
      }
    });
    r.weather = weatherClean;
  }

  return r;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'weather' })
export class WeatherStore extends Store<WeatherState> {
  constructor() {
    super(
      createInitialState({
        weather: null,
        city: null
      })
    );
  }
}
