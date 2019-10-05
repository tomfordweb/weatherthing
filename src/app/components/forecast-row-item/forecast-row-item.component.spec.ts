import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastRowItemComponent } from './forecast-row-item.component';

describe('ForecastRowItemComponent', () => {
  let component: ForecastRowItemComponent;
  let fixture: ComponentFixture<ForecastRowItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastRowItemComponent ]
    })
    .compileComponents();
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
