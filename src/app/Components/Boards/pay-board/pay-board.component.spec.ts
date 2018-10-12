import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayBoardComponent } from './pay-board.component';

describe('PayBoardComponent', () => {
  let component: PayBoardComponent;
  let fixture: ComponentFixture<PayBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
