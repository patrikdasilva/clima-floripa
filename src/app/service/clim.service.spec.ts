import { TestBed } from '@angular/core/testing';

import { ClimService } from './clim.service';

describe('ClimService', () => {
  let service: ClimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
