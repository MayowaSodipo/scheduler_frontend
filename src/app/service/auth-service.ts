import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { UserDetails } from './authService.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private route: Router) {}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      return throwError(
        () => new Error(`An error occured ${error.error.message}`)
      );
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error.message
      );
      return throwError(() => new Error(error.error.message));
    }
  }
  Login(loginData: any) {
    return this.http
      .post('https://localhost:7225/api/Authentication/Login', loginData)
      .pipe(catchError(this.handleError));
  }
  Register(RegisterData: any) {
    return this.http
      .post('https://localhost:7225/api/Authentication/Register', RegisterData)
      .pipe(catchError(this.handleError));
  }
  isLoggedIn() {
    return localStorage.getItem('data');
  }
  userData() {
    const userDetails = localStorage.getItem('data');
    if (userDetails != null) {
      const data = JSON.parse(userDetails);
      return data;
    }
  }
  logOut() {
    localStorage.clear();
    this.route.navigate(['']);
  }
}
