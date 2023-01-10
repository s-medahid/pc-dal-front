import { TestBed } from '@angular/core/testing';

import { VueGlobalService } from './vue-global.service';

describe('VueGlobalService', () => {
  let service: VueGlobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VueGlobalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
