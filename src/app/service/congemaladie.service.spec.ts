import { TestBed } from '@angular/core/testing';

import { CongemaladieService } from './congemaladie.service';

describe('CongemaladieService', () => {
  let service: CongemaladieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CongemaladieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
