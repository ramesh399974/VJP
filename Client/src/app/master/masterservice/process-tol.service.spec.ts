import { TestBed } from '@angular/core/testing';

import { ProcessTolService } from './process-tol.service';

describe('ProcessTolService', () => {
  let service: ProcessTolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessTolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
