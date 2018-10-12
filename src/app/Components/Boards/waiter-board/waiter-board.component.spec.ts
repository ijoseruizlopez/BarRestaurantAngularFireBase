import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterBoardComponent } from './waiter-board.component';

describe('WaiterBoardComponent', () => {
  let component: WaiterBoardComponent;
  let fixture: ComponentFixture<WaiterBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaiterBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiterBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
