import { Component, OnInit } from '@angular/core';
import { LocationService } from './state/location.service';

@Component({
  selector: 'app-set-location',
  templateUrl: './set-location.component.html',
  styleUrls: ['./set-location.component.scss']
})
export class SetLocationComponent implements OnInit {

  constructor(private locationService: LocationService) { }

  ngOnInit() {
  }

  set(locationInput:string):void {
    this.locationService.set(locationInput);
  }
}
