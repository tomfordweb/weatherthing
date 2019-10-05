import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastListComponent } from './forecast-list.component';
import { ForecastRowItemComponent } from '../forecast-row-item/forecast-row-item.component';
import { ForecastRowDetailItemComponent } from '../forecast-row-detail-item/forecast-row-detail-item.component';

describe('ForecastListComponent', () => {
  let component: ForecastListComponent;
  let fixture: ComponentFixture<ForecastListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ForecastListComponent,
        ForecastRowItemComponent,
        ForecastRowDetailItemComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
