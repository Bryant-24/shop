import { TestBed } from '@angular/core/testing';

import { CartService } from './component.service';

describe('ComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });
});
