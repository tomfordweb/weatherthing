import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetLocationComponent } from './set-location.component';

const routes: Routes = [{ path: '', component: SetLocationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetLocationRoutingModule {
}
