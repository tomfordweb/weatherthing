import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { LocationCity } from 'src/app/set-location/state';
import * as moment from 'moment';

export interface OpenWeatherRaw {
  list?: WeatherRaw[];
  city?: LocationCity;
}

export type WeatherRaw = {
  clouds: { all: number };
  dt: number;
  dt_txt: string;
  main: {
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
  };
  weather: Array<{
    description: string;
    icon: string;
    id: number;
    main: string;
  }>;
};

export interface WeatherState {
  weather?: WeatherClean[];
  city?: LocationCity;
}

export type WeatherClean = {
  date?: {
    iso: number;
    time: string;
    day: string;
    month: string;
    year: string;
  };
  humidity?: number;
  groundLevel?: number;
  pressure?: number;
  temperature?: number;
  seaLevel?: number;
  weather?: Array<{
    description: string;
    icon: string;
    id: number;
    main: string;
  }>;
};

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
          weather: item.weather
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
