import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterOrdersToCollectComponent } from './waiter-orders-to-collect.component';

describe('WaiterOrdersToCollectComponent', () => {
  let component: WaiterOrdersToCollectComponent;
  let fixture: ComponentFixture<WaiterOrdersToCollectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaiterOrdersToCollectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiterOrdersToCollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
