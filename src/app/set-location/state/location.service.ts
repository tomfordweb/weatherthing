import { Injectable } from '@angular/core';
import { LocationStore } from './location.store';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class LocationService {

  constructor(
    private locationStore: LocationStore
  ) {
  }

  get() {
    // return this.http.get('').pipe(tap(entities => this.locationStore.update(entities)));
  }

  set(input:string) {
    this.locationStore.update({
      location: input
    });
  }
}
