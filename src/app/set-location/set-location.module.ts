import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetLocationRoutingModule } from './set-location-routing.module';
import { SetLocationComponent } from './set-location.component';


@NgModule({
  declarations: [SetLocationComponent],
  imports: [
    CommonModule,
    SetLocationRoutingModule
  ]
})
export class SetLocationModule { }
