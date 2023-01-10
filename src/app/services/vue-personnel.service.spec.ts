import { TestBed } from '@angular/core/testing';

import { VuePersonnelService } from './vue-personnel.service';

describe('VuePersonnelService', () => {
  let service: VuePersonnelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VuePersonnelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
