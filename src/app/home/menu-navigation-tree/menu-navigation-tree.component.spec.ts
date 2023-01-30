import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavigationTreeComponent } from './menu-navigation-tree.component';

describe('MenuNavigationTreeComponent', () => {
  let component: MenuNavigationTreeComponent;
  let fixture: ComponentFixture<MenuNavigationTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuNavigationTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNavigationTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
