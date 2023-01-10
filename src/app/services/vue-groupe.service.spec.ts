import { TestBed } from '@angular/core/testing';

import { VueGroupeService } from './vue-groupe.service';

describe('VueGroupeService', () => {
  let service: VueGroupeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VueGroupeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
