import { Component, OnInit } from '@angular/core';
import { LocationQuery, LocationService } from '../set-location/state';
import { WeatherService, WeatherQuery } from '../state/weather';
@Component({
  selector: 'app-dashboard',
  template: `
    <div class="container">
      <div class="row">
        <header class="col-sm-12 form-inline mb-4">
          <label class="lead">Weather For </label>&nbsp;
          <input
            type="text"
            class="form-control form-control-lg"
            value="{{ location }}"
            (keydown.enter)="updateLocation(locationInput.value)"
            #locationInput
          />
          <button
            (click)="updateLocation(locationInput.value)"
            class="btn btn-default"
          >
            Update
          </button>
        </header>

        <ng-container *ngIf="weather">
          <app-forecast-list
            [weather]="weather"
            class="col-sm-12"
          ></app-forecast-list>
        </ng-container>
      </div>
    </div>
  `,
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
