import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private ar: ActivatedRoute) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(() => { },
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          switch (err.status) {
            case 401:
              this.router.navigateByUrl('/public/account/login');
              break;
            // case 403:
            //   this.router.navigateByUrl('/error/403');
            //   break;
            // case 404:
            //   this.router.navigateByUrl('/error/404');
            //   break;
          }
        }
      }));
  }
}
