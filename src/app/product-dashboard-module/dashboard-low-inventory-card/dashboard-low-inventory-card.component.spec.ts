import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLowInventoryCardComponent } from './dashboard-low-inventory-card.component';

describe('DashboardLowInventoryCardComponent', () => {
  let component: DashboardLowInventoryCardComponent;
  let fixture: ComponentFixture<DashboardLowInventoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardLowInventoryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLowInventoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
