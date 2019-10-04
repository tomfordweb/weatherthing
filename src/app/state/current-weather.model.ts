import { ID, guid } from '@datorama/akita';

export interface CurrentWeather {
  id: ID;
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
    id: guid(),
    ...params
  } as CurrentWeather;
}
