import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface LocationState {
  location:string;
}

export function createInitialState(location:string = ''): LocationState {
  return {
    location
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'location' })
export class LocationStore extends Store<LocationState> {

  constructor() {
    super(createInitialState());
  }
}
