import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastRowItemComponent } from './forecast-row-item.component';
import { ForecastListComponent } from '../forecast-list/forecast-list.component';
import { ForecastRowDetailItemComponent } from '../forecast-row-detail-item/forecast-row-detail-item.component';

describe('ForecastRowItemComponent', () => {
  let component: ForecastRowItemComponent;
  let fixture: ComponentFixture<ForecastRowItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ForecastRowItemComponent,
        ForecastListComponent,
        ForecastRowDetailItemComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastRowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
