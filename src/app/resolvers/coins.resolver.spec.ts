import { TestBed } from '@angular/core/testing';

import { CoinsResolver } from './coins.resolver';

describe('CoinsResolver', () => {
  let resolver: CoinsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CoinsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
