import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDataFilterCardComponent } from './dashboard-data-filter-card.component';

describe('DashboardDataFilterCardComponent', () => {
  let component: DashboardDataFilterCardComponent;
  let fixture: ComponentFixture<DashboardDataFilterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDataFilterCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDataFilterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
