import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CurrentLocationStore, CurrentLocationState } from './current-location.store';

@Injectable({ providedIn: 'root' })
export class CurrentLocationQuery extends QueryEntity<CurrentLocationState> {

  constructor(protected store: CurrentLocationStore) {
    super(store);
  }

}
