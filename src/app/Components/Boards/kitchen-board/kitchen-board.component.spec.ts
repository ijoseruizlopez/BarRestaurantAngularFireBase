import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenBoardComponent } from './kitchen-board.component';

describe('KitchenBoardComponent', () => {
  let component: KitchenBoardComponent;
  let fixture: ComponentFixture<KitchenBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
