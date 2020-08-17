import { TestBed } from '@angular/core/testing';

import { DatanavigationService } from './datanavigation.service';

describe('DatanavigationService', () => {
  let service: DatanavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatanavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
