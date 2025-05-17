import { TestBed } from '@angular/core/testing';

import { EnrollApiService } from './enroll-api.service';

describe('EnrollApiService', () => {
  let service: EnrollApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrollApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
