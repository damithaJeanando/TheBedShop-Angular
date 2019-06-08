import { TestBed } from '@angular/core/testing';

import { CustomOrdersService } from './custom-orders.service';

describe('CustomOrdersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomOrdersService = TestBed.get(CustomOrdersService);
    expect(service).toBeTruthy();
  });
});
