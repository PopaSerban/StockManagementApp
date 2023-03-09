import { TestBed } from '@angular/core/testing';

import { ExpressAPIService } from './express-api.service';

describe('ExpressAPIService', () => {
  let service: ExpressAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpressAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
