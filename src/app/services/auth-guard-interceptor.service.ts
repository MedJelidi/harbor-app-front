import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardInterceptorService implements CanActivate {
  constructor(private router: Router,
              private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const connected = this.authService.getLoggedIn().getValue();
    if (connected !== undefined) {
      if (!connected) {
        this.router.navigate(['/login'], { queryParams: { redirectUrl: state.url }}).then();
        return false;
      }
      return true;
    }
    return new Observable<boolean>(loggedIn => {
      this.authService.verify()
        .subscribe(value => {
          loggedIn.next(value.body);
          if (!value.body) {
            this.router.navigate(['/login', { queryParams: { redirectUrl: state.url }}])
              .then();
          }
          },
          () => {
            this.router.navigate(['/login', { queryParams: { redirectUrl: state.url }}])
              .then(() => loggedIn.next(false));
          });
    });
  }
}
