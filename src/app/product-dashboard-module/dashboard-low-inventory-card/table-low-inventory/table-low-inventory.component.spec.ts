import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLowInventoryComponent } from './table-low-inventory.component';

describe('TableLowInventoryComponent', () => {
  let component: TableLowInventoryComponent;
  let fixture: ComponentFixture<TableLowInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableLowInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLowInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
