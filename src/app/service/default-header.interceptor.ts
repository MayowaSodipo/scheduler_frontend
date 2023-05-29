import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service';


@Injectable()
export class DefaultHeaderInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.isLoggedIn()) {
      // Clone the request and set the default header
      const modifiedRequest = request.clone({
        setHeaders: {
          'Authorization': `bearer ${this.authService.userData().token}`,
        },
      });

      // Pass the modified request to the next interceptor or the HttpClient
      return next.handle(modifiedRequest);
    }

    // Pass the original request if user is not logged in
    return next.handle(request);
  }
}
