import { ID, guid } from '@datorama/akita';
import { LocationCity } from '../set-location/state';

export type LocationWeatherInfo = {
  list:CurrentWeather[],
  city:LocationCity,
  id: ID,
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

export function createCurrentWeather(params: Partial<CurrentWeather>) {
  return {
  } as LocationWeatherInfo;
}
