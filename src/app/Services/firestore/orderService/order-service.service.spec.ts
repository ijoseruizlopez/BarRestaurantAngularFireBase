import { TestBed } from '@angular/core/testing';

import { FirestoreOrderService } from './order-service.service';

describe('OrderServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirestoreOrderService = TestBed.get(FirestoreOrderService);
    expect(service).toBeTruthy();
  });
});
