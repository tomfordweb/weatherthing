import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { LocationService, LocationStore, createInitialState } from '../set-location/state';

describe('DashboardComponent - using store', () => {
  let component: DashboardComponent;
  let locationStore: LocationStore;
  let fixture: ComponentFixture<DashboardComponent>;
  let dom: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: LocationService,
          useValue: jasmine.createSpyObj('TodosService', ['get'])
        }
      ],
      declarations: [DashboardComponent]
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
    const h1 = dom.querySelector('h1');
    expect(h1.textContent).toContain('Chicago');
  });
});

