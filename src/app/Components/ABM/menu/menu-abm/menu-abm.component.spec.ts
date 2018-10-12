import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuABMComponent } from './menu-abm.component';

describe('MenuABMComponent', () => {
  let component: MenuABMComponent;
  let fixture: ComponentFixture<MenuABMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuABMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuABMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
