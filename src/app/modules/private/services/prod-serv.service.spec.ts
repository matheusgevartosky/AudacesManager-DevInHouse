import { TestBed } from '@angular/core/testing';

import { ProdServService } from './prod-serv.service';

describe('ProdServService', () => {
  let service: ProdServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
