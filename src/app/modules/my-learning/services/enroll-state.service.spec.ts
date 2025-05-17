import { TestBed } from '@angular/core/testing';

import { EnrollStateService } from './enroll-state.service';

describe('EnrollStateService', () => {
  let service: EnrollStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrollStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
