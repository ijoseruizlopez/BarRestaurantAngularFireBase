import { TestBed } from '@angular/core/testing';

import { FirestoreProductService } from './product-service.service';

describe('ProductServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirestoreProductService = TestBed.get(FirestoreProductService);
    expect(service).toBeTruthy();
  });
});
