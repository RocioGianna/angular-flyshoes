import { TestBed } from '@angular/core/testing';

import { ZapatillasCartService } from './zapatillas-cart.service';

describe('ZapatillasCartService', () => {
  let service: ZapatillasCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZapatillasCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
