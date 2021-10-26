import { TestBed } from '@angular/core/testing';

import { ReverseAuthGuardInterceptorService } from './reverse-auth-guard-interceptor.service';

describe('ReverseAuthGuardInterceptorService', () => {
  let service: ReverseAuthGuardInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReverseAuthGuardInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
