import { LocationCity } from 'src/app/set-location/state';

export interface OpenWeatherRaw {
  list?: WeatherRaw[];
  city?: LocationCity;
}

export interface WeatherRaw {
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
}

export interface WeatherState {
  weather?: WeatherClean[];
  city?: LocationCity;
}

export interface WeatherCleanDate {
  iso?: number;
  time?: string;
  minutes?: string;
  day?: string;
  month?: string;
  year?: string;
}
export interface WeatherClean {
  date?: WeatherCleanDate;
  humidity?: number;
  groundLevel?: number;
  pressure?: number;
  temperature?: number;
  seaLevel?: number;
  description?: string;
  icon?: string;
  id?: number;
  main?: string;
}
