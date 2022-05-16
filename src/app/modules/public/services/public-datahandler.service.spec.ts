import { TestBed } from '@angular/core/testing';

import { PublicDatahandlerService } from './public-datahandler.service';

describe('PublicDatahandlerService', () => {
  let service: PublicDatahandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicDatahandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
