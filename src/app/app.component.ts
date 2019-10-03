import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocationQuery, LocationState } from './set-location/state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weatherthing';
  constructor(
    private locationQuery: LocationQuery,
    private router: Router) {

  }

  ngOnInit() {
    this.locationQuery.getLocation$.subscribe(stateLocation => {
      if(!stateLocation.length) {
        this.router.navigate(['/set-location']);
      } else {
        this.router.navigate(['/dashboard']);
      }
    })
  }
}
