import { TestBed } from '@angular/core/testing';

import { PointsChaudsService } from './points-chauds.service';

describe('PointsChaudsService', () => {
  let service: PointsChaudsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PointsChaudsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
