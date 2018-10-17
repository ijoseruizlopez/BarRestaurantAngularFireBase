import { TestBed } from '@angular/core/testing';

import { FirestoreTableService } from './table-service.service';

describe('TableServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirestoreTableService = TestBed.get(FirestoreTableService);
    expect(service).toBeTruthy();
  });
});
