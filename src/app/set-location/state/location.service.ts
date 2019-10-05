import { Injectable, Inject } from '@angular/core';
import { LocationStore, LocationCity } from './location.store';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

export const LOCATION_LOCAL_STORAGE_KEY = 'weatherthing:state:location';

@Injectable({ providedIn: 'root' })
export class LocationService {
  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private locationStore: LocationStore
  ) {}

  public setLocationFromLocalStorage() {
    const localStorageLocation = this.storage.get(LOCATION_LOCAL_STORAGE_KEY);

    if (localStorageLocation) {
      this.setLocation(localStorageLocation);
    }
  }

  setLocation(input: string): void {
    if (input && input.length) {
      this.locationStore.update({
        location: input
      });

      this.storage.set(LOCATION_LOCAL_STORAGE_KEY, input);
    }
  }
}
