import { Injectable } from '@angular/core';
import { CurrentWeatherStore } from './current-weather.store';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { CurrentWeather } from './current-weather.model';

type RawData = {
  list:Array<CurrentWeather>
};

@Injectable({ providedIn: 'root' })
export class CurrentWeatherService {

  constructor(private currentWeatherStore: CurrentWeatherStore,
              private http: HttpClient) {
  }
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

  convertResponse() {

  }

  get(location:string) {
 
    this.queryOpenWeather(location).subscribe((response:RawData) =>  {
      console.log(typeof response);

      this.currentWeatherStore.set(response);
    });
  }
}
