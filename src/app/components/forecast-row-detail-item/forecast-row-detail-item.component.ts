import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forecast-row-detail-item',
  template: `
    <div>
      <p class="value mb-0 text-center">
        <ng-content></ng-content>
      </p>
      <p class="title text-center mb-0">{{ title }}</p>
    </div>
  `
})
export class ForecastRowDetailItemComponent {
  @Input() title: string;
}
