import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const { shouldBeLoggedIn, otherwiseRedirectTo } = next.data;
    if (this.isAllowed(shouldBeLoggedIn)) {
      console.log('canActivate success! going to', next.pathFromRoot);
      return true;
    }

    console.log('canActivate failure! redirecting to', otherwiseRedirectTo);
    this.router.navigateByUrl(otherwiseRedirectTo);
    return false;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[],
  ): boolean | Observable<boolean> | Promise<boolean> {
    const { shouldBeLoggedIn, otherwiseRedirectTo } = route.data;
    if (this.isAllowed(shouldBeLoggedIn)) {
      console.log('canLoad success! going to', route.path);
      return true;
    }

    console.log('canLoad failure! redirecting to', otherwiseRedirectTo);
    this.router.navigateByUrl(otherwiseRedirectTo);
    return false;
  }

  private isAllowed(shouldBeLoggedIn: boolean): boolean {
    return this.auth.isLoggedIn() === shouldBeLoggedIn;
  }
}
