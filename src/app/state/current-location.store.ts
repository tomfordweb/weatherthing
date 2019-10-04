import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { CurrentLocation } from './current-location.model';

export interface CurrentLocationState extends EntityState<CurrentLocation> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'currentLocation' })
export class CurrentLocationStore extends EntityStore<CurrentLocationState> {

  constructor() {
    super();
  }

}

