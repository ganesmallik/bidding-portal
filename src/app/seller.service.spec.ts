import { TestBed } from '@angular/core/testing';

import { SellerService } from './seller.service';

import { HttpClientModule } from '@angular/common/http';

describe('SellerService', () => {
  let service: SellerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(SellerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
