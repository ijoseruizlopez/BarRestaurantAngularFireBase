import { TestBed } from '@angular/core/testing';

import { FirestoreMenuService } from './menu-service.service';

describe('MenuServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirestoreMenuService = TestBed.get(FirestoreMenuService);
    expect(service).toBeTruthy();
  });
});
