import { TestBed } from '@angular/core/testing';

import { Boardservice } from './boardservice';

describe('Boardservice', () => {
  let service: Boardservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Boardservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
