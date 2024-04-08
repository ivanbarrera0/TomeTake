import { TestBed } from '@angular/core/testing';

import { CurrentbookService } from './currentbook.service';

describe('CurrentproductService', () => {
  let service: CurrentbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentbookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
