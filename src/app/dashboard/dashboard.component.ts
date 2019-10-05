import { Component, OnInit } from '@angular/core';
import { LocationQuery, LocationState } from '../set-location/state';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CurrentWeatherService, CurrentWeather, CurrentWeatherQuery } from '../state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  location:string = '';

  public currentWeather;

  constructor(
    private locationQuery:LocationQuery,
    private currentWeatherQuery: CurrentWeatherQuery,
    private currentWeatherService: CurrentWeatherService
  ) { }

  ngOnInit() {
    this.locationQuery.getLocation$.subscribe(loc => {
      this.location = loc;
      this.currentWeatherService.get(loc);
    });

    this.currentWeatherQuery.selectAll().subscribe( currentWeather => this.currentWeather = currentWeather);

  }
}
