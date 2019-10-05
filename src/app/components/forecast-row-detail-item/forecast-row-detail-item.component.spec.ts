import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastRowDetailItemComponent } from './forecast-row-detail-item.component';

describe('ForecastRowDetailItemComponent', () => {
  let component: ForecastRowDetailItemComponent;
  let fixture: ComponentFixture<ForecastRowDetailItemComponent>;
  let dom: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForecastRowDetailItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastRowDetailItemComponent);
    component = fixture.componentInstance;
    component.title = 'foobar';
    dom = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can set the title', () => {
    const title = dom.querySelector('.title');
    console.log(dom);
    expect(title.textContent).toBe('foobar');
  });
});
