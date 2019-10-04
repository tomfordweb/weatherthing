import { Component, OnInit } from '@angular/core';
import { LocationQuery, LocationState } from '../set-location/state';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CurrentWeatherService } from '../state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  location:string = '';

  constructor(
    private locationQuery:LocationQuery,
    private currentWeatherService: CurrentWeatherService
  ) { }

  ngOnInit() {
    this.locationQuery.getLocation$.subscribe(loc => {
      this.location = loc;
      this.currentWeatherService.get(loc);
    })
  }
}
