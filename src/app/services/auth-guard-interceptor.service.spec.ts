import { TestBed } from '@angular/core/testing';

import { AuthGuardInterceptorService } from './auth-guard-interceptor.service';

describe('AuthGuardInterceptorService', () => {
  let service: AuthGuardInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
