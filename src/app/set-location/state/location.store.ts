import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface LocationCity {

    id:number;
    name:string;
    country:string;
    population:number;
    timezone: number;
    sunrise:number;
    sunset:number;
}
export interface LocationState {
  location:string;
  city?:LocationCity
};

export function createInitialState(location:string = ''): LocationState {
  return {
    location,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'location' })
export class LocationStore extends Store<LocationState> {

  constructor() {
    super(createInitialState());
  }
}
