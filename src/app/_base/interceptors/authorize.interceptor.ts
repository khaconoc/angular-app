import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { UserService } from '../../_share/services/user.service';
const TOKEN_HEADER_KEY = 'Authorization';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeInterceptor implements HttpInterceptor {
  constructor(private auth: UserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req;
    // if (this.auth.isAuthenticated()) {
    //   const token = this.auth.authorizationHeaderValue;
    //   authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
    // }
    return next.handle(authReq);
  }
}
