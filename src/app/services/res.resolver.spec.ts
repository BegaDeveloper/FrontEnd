import { TestBed } from '@angular/core/testing';

import { ResResolver } from './res.resolver';

describe('ResResolver', () => {
  let resolver: ResResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ResResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
