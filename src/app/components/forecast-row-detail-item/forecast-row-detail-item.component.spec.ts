import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastRowDetailItemComponent } from './forecast-row-detail-item.component';

describe('ForecastRowDetailItemComponent', () => {
  let component: ForecastRowDetailItemComponent;
  let fixture: ComponentFixture<ForecastRowDetailItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastRowDetailItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastRowDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
