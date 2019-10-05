import { ID, guid } from '@datorama/akita';
import { LocationCity } from '../set-location/state';
import * as moment from 'moment';
import { timeInterval } from 'rxjs/operators';

export type LocationWeatherInfo = {
  list:CurrentWeather[],
  city:LocationCity,
  id: ID,
  createdDate:string
}

export type CurrentWeather = {
  clouds:{all:number},
  dt:number,
  dt_txt:string,
  main:{
    grnd_level:number
    humidity:number
    pressure:number
    sea_level:number
    temp:number
    temp_kf:number
    temp_max:number
  },
  weather:Array<{
    description:string
    icon:string
    id:number
    main:string
  }>
}

export type Weather = {
  date: {
    iso:number,
    time:string,
    day:string,
    month:string,
    year:string
  },
  humidity?:number;
  groundLevel?:number;
  pressure?:number;
  temperature?:number;
  seaLevel?:number,
  weather:Array<{
    description:string
    icon:string
    id:number
    main:string
  }>
}

export function createCurrentWeather(props:Partial<CurrentWeather>) {
  const now = moment(props.dt_txt);

  const date = {
      iso: props.dt,
      time: now.format('hA'),
      minutes: now.format('MM'),
      day: now.format('dddd'),
      month: now.format('F'),
      year: now.format('YYYY'),
  };

  const main = {
    groundLevel: props.main.grnd_level,
    humidity: props.main.humidity,
    pressure: props.main.pressure,
    temperature: props.main.temp,
    seaLevel: props.main.sea_level,
    weather: props.weather
  };

  return {
    ...main,
    date,
  } as Weather;
}
