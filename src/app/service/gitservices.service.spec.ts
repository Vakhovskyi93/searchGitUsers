import { TestBed } from '@angular/core/testing';

import { GitservicesService } from './git.service';

describe('GitservicesService', () => {
  let service: GitservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
