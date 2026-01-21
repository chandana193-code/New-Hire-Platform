import { TestBed } from '@angular/core/testing';

import { PostvacancyService } from './postvacancy.service';

describe('PostvacancyService', () => {
  let service: PostvacancyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostvacancyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
