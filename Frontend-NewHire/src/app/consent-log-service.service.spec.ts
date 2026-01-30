import { TestBed } from '@angular/core/testing';

import { ConsentLogServiceService } from './consent-log-service.service';

describe('ConsentLogServiceService', () => {
  let service: ConsentLogServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsentLogServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
