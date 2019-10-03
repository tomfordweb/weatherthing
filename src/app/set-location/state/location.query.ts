import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { LocationStore, LocationState } from './location.store';

@Injectable({ providedIn: 'root' })
export class LocationQuery extends Query<LocationState> {

  getLocation$ = this.select('location');

  constructor(protected store: LocationStore) {
    super(store);
  }

}
