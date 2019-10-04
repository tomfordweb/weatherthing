import { Injectable } from '@angular/core';
import { CurrentLocationStore, CurrentLocationState } from './current-location.store';
import { NgEntityService } from '@datorama/akita-ng-entity-service';

@Injectable({ providedIn: 'root' })
export class CurrentLocationService extends NgEntityService<CurrentLocationState> {

  constructor(protected store: CurrentLocationStore) {
    super(store);
  }

}
