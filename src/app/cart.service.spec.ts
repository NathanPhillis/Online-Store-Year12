import { TestBed } from '@angular/core/testing';

import { CartrService } from './cart.service';

describe('CartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartService = TestBed.get(CartrService);
    expect(service).toBeTruthy();
  });
});
