import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const apiReq = request.clone({
      headers: new HttpHeaders({
        'X-CoinAPI-Key': environment.apiKey,
      }),
      url: `${environment.baseUrl}${request.url}`,
    });

    return next.handle(apiReq).pipe(
      catchError((error: HttpErrorResponse) => {
        console.warn(error);
        return throwError(error);
      })
    );
  }
}
