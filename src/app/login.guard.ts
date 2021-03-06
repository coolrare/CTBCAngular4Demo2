import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private route: ActivatedRoute) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!!localStorage["IsLogin"]) {
        return true;
      } else {
        this.router.navigate(['/login'], {
          queryParams: {
            returnUrl: '/'+next.url.join('/')
          }
        });
      }
  }
}
