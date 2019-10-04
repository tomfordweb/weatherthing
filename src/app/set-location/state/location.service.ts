import { Injectable } from '@angular/core';
import { LocationStore } from './location.store';

@Injectable({ providedIn: 'root' })
export class LocationService {

  constructor(
    private locationStore: LocationStore
  ) {
  }

  set(input:string) {
    this.locationStore.update({
      location: input
    });
  }
}
