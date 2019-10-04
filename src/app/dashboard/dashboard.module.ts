import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SetLocationComponent } from '../set-location/set-location.component';
import { SetLocationModule } from '../set-location/set-location.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
})
export class DashboardModule { }
