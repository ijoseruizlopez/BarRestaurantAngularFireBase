import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAbmComponent } from './table-abm.component';

describe('TableAbmComponent', () => {
  let component: TableAbmComponent;
  let fixture: ComponentFixture<TableAbmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAbmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
