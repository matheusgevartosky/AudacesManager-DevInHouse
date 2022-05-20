import { TestBed } from '@angular/core/testing';

import { CollectServService } from './collect-serv.service';

describe('CollectServService', () => {
  let service: CollectServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
