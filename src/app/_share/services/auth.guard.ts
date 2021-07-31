import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { environment } from 'src/environments/environment';

import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // if (!environment.login || this.userService.isAuthenticated()) { return true; }
    if (!environment.login || true) { return true; }
    this.router.navigate(['/public/account/login'], { queryParams: { redirect: state.url }, replaceUrl: true });
    return false;
  }

}
