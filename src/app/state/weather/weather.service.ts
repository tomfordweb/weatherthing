import { Injectable, Inject } from '@angular/core';
import {
  WeatherStore,
  OpenWeatherRaw,
  createInitialState,
  WeatherClean,
  WeatherState
} from './weather.store';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';
import * as moment from 'moment';
import { LocationService } from 'src/app/set-location/state';
import { guid } from '@datorama/akita';

export const CURRENT_WEATHER_LOOCAL_STORAGE_KEY =
  'weatherthing:state:currentWeather';
export const CURRENT_WEATHER_LAST_UPDATED_LOCAL_STORAGE_KEY =
  'weatherthing:state:currentWeather:modified';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private weatherStore: WeatherStore,
    private locationService: LocationService,
    private http: HttpClient
  ) {}

  queryOpenWeather(location: any) {
    let params = new HttpParams();
    params = params.set('q', location);
    params = params.set('APPID', environment.openWeatherKey);
    params = params.set('units', 'imperial');

    return this.http.get('http://api.openweathermap.org/data/2.5/forecast', {
      responseType: 'json',
      params
    });
  }

  updateLocation(location: string) {
    // clear current location
    this.storage.set(CURRENT_WEATHER_LAST_UPDATED_LOCAL_STORAGE_KEY, null);
    this.locationService.setLocation(null);

    // clear weather data
    this.storage.set(CURRENT_WEATHER_LOOCAL_STORAGE_KEY, {});
    this.storage.set(CURRENT_WEATHER_LAST_UPDATED_LOCAL_STORAGE_KEY, null);

    this.get(location);
  }

  get(location: string) {
    const localStorageCurrentWeather = this.storage.get(
      CURRENT_WEATHER_LOOCAL_STORAGE_KEY
    );
    const localStorageLastUpdated = this.storage.get(
      CURRENT_WEATHER_LAST_UPDATED_LOCAL_STORAGE_KEY
    );
    let queryApi = true;
    const now = moment().format('YYYY-MM-DD HH:mm:ss');

    // if (
    //   // only hit api if we havent seen you before
    //   // or the weather is 4 hours old.
    //   localStorageCurrentWeather &&
    //   localStorageLastUpdated &&
    //   moment(localStorageLastUpdated).isBefore(moment().add(4, 'hours'))
    // ) {
    //   queryApi = false;
    //   this.weatherStore.update(localStorageCurrentWeather);
    //   return;
    // }

    if (queryApi) {
      this.queryOpenWeather(location).subscribe(
        (response: OpenWeatherRaw) => {
          console.log(response);

          const weatherState = createInitialState(response);

          this.weatherStore.update(weatherState);

          this.weatherStore.update({
            city: response.city
          });
          this.storage.set(CURRENT_WEATHER_LOOCAL_STORAGE_KEY, weatherState);
          this.storage.set(CURRENT_WEATHER_LAST_UPDATED_LOCAL_STORAGE_KEY, now);
        },
        error => {
          // bad request, clear location..
          this.storage.set(
            CURRENT_WEATHER_LAST_UPDATED_LOCAL_STORAGE_KEY,
            null
          );
          this.locationService.setLocation(null);
          console.log('error', error);
        }
      );
    }
  }
}
