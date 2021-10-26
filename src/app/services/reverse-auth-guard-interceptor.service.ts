import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable()
export class ReverseAuthGuardInterceptorService implements CanActivate {
  constructor(private router: Router,
              private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const connected = this.authService.getLoggedIn().getValue();
    console.log(connected);
    if (connected !== undefined) {
      if (connected) {
        this.router.navigate(['']).then();
        return false;
      }
      return true;
    }
    return new Observable<boolean>(loggedIn => {
      this.authService.verify()
        .subscribe(value => {
            loggedIn.next(value.body);
            console.log(value.body);
            if (value.body) {
              this.router.navigate(['']).then();
            } else {
              this.router.navigate(['/login']).then();
            }
          },
          () => {
            loggedIn.next(false);
          });
    });
  }
}
