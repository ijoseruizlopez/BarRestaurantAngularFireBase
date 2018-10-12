import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductABMComponent } from './product-abm.component';

describe('ProductABMComponent', () => {
  let component: ProductABMComponent;
  let fixture: ComponentFixture<ProductABMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductABMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductABMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
