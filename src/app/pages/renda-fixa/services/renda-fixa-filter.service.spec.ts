import { TestBed } from '@angular/core/testing';

import { RendaFixaFilterService } from './renda-fixa-filter.service';

describe('RendaFixaFilterService', () => {
  let service: RendaFixaFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RendaFixaFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
