import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SetLocationComponent } from '../set-location/set-location.component';
import { SetLocationModule } from '../set-location/set-location.module';
import { ForecastRowItemComponent } from '../components/forecast-row-item/forecast-row-item.component';
import { ForecastListComponent } from '../components/forecast-list/forecast-list.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ForecastRowItemComponent,
    ForecastListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
})
export class DashboardModule { }
