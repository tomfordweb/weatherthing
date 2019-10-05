import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { SetLocationModule } from './set-location/set-location.module';
import { HttpClientModule } from '@angular/common/http';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { ForecastListComponent } from './components/forecast-list/forecast-list.component';
import { ForecastRowItemComponent } from './components/forecast-row-item/forecast-row-item.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AkitaNgDevtools.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
