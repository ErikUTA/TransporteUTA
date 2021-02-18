import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuChoferComponent } from './menu-chofer.component';

describe('MenuChoferComponent', () => {
  let component: MenuChoferComponent;
  let fixture: ComponentFixture<MenuChoferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuChoferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuChoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
