import { TestBed } from '@angular/core/testing';

import { MessdataService } from './messdata.service';

describe('MessdataService', () => {
  let service: MessdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
