import { TestBed } from '@angular/core/testing';

import { TaxiutaService } from './taxiuta.service';

describe('TaxiutaService', () => {
  let service: TaxiutaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxiutaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
