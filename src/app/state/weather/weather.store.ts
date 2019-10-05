import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import * as moment from 'moment';
import {
  OpenWeatherRaw,
  WeatherState,
  WeatherRaw,
  WeatherClean,
  WeatherCleanDate
} from '.';

export function createWeather(item: WeatherRaw | null = null) {
  const now = item && item.dt_txt ? moment(item.dt_txt) : moment();

  const date: WeatherCleanDate = {};

  const weather: WeatherClean = {};

  if (item) {
    date.iso = item.dt;
  }

  date.time = now.format('hA');
  date.minutes = now.format('MM');
  date.day = now.format('dddd');
  date.month = now.format('F');
  date.year = now.format('YYYY');

  weather.date = date;

  const main = item && item.main ? item.main : false;

  weather.groundLevel = main ? main.grnd_level : null;
  weather.humidity = main ? main.humidity : null;
  weather.pressure = main ? main.pressure : null;
  weather.temperature = main ? Math.round(main.temp) : null;
  weather.seaLevel = main ? main.sea_level : null;

  const desc =
    item && item.weather && item.weather.length > 0 ? item.weather[0] : false;

  weather.description = desc ? desc.description : '';
  weather.icon = desc ? desc.icon : '';
  weather.id = desc ? desc.id : null;
  weather.main = desc ? desc.main : '';

  return weather;
}

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
