import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {
  LocationService,
  LocationStore,
  createInitialState
} from '../set-location/state';
import { ForecastRowItemComponent } from '../components/forecast-row-item/forecast-row-item.component';
import { ForecastListComponent } from '../components/forecast-list/forecast-list.component';
import { ForecastRowDetailItemComponent } from '../components/forecast-row-detail-item/forecast-row-detail-item.component';
import { HttpClientModule } from '@angular/common/http';

describe('DashboardComponent - using store', () => {
  let component: DashboardComponent;
  let locationStore: LocationStore;
  let fixture: ComponentFixture<DashboardComponent>;
  let dom: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [
        DashboardComponent,
        ForecastRowItemComponent,
        ForecastListComponent,
        ForecastRowDetailItemComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    locationStore = TestBed.get(LocationStore);
    dom = fixture.debugElement.nativeElement;
    locationStore.update(createInitialState('Chicago'));
    fixture.detectChanges();
  });

  it('should set location prop from store', () => {
    expect(component.location).toBe('Chicago');
  });

  it('should display the location in the header', () => {
    const input = dom.querySelector('input');
    expect(input.value).toContain('Chicago');
  });
});
