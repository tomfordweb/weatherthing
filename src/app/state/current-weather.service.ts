import { Injectable } from '@angular/core';
import { CurrentWeatherStore } from './current-weather.store';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { CurrentWeather, LocationWeatherInfo } from './current-weather.model';
import { LocationStore } from '../set-location/state';
import { guid } from '@datorama/akita';


@Injectable({ providedIn: 'root' })
export class CurrentWeatherService {

  constructor(
    private currentWeatherStore: CurrentWeatherStore,
    private locationStore: LocationStore,
    private http: HttpClient
  ) {}
  queryOpenWeather(location:any) {
    let params = new HttpParams();
    params = params.set('q', location);
    params = params.set('APPID', environment.openWeatherKey);
    console.log(params);

    return this.http.get('http://api.openweathermap.org/data/2.5/forecast', {
      responseType: 'json',
      params: params
   });
  }

  protected createFromOpenWeatherListResponse(response:CurrentWeather[]) {
    return response.reduce((obj, item) => {
      obj[guid()] = item
      return obj
    }, {})
  }
  get(location:string) {

    this.queryOpenWeather(location)
      .subscribe((response:LocationWeatherInfo) =>  {
        // set the hourly weather data
        this.currentWeatherStore.set(
          this.createFromOpenWeatherListResponse(response.list)
      );

      // update city information such as latitude, longitude, sunset, population, etc
      this.locationStore.update({
          city: response.city
        });
      });
  }
}
