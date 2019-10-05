import { Component, OnInit } from '@angular/core';
import { LocationQuery, LocationService } from '../set-location/state';
import { WeatherService, WeatherQuery } from '../state/weather';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  location = '';

  public weather;

  constructor(
    private locationQuery: LocationQuery,
    private locationService: LocationService,
    private weatherService: WeatherService,
    private weatherQuery: WeatherQuery
  ) {}

  ngOnInit() {
    this.locationQuery.getLocation$.subscribe(loc => {
      this.location = loc;
      this.weatherService.get(loc);
    });

    this.weatherQuery.getWeather$.subscribe(weather => {
      this.weather = weather;
    });
  }

  updateLocation(newLocation: string): void {
    this.weatherService.updateLocation(newLocation);
  }
}
