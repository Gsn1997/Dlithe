import { TestBed } from '@angular/core/testing';

import { BankingdetailsService } from './bankingdetails.service';

describe('BankingdetailsService', () => {
  let service: BankingdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankingdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
