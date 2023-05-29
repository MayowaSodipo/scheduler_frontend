import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { response } from '../dashboard/dash/dash.interface';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
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

  constructor(private http: HttpClient) {}
  getAll(): Observable<response> {
    return this.http
      .get<response>('https://localhost:7225/api/User')
      .pipe(catchError(this.handleError));
  }
  addUser(inputData: any): Observable<response> {
    return this.http
      .post<response>('https://localhost:7225/api/User', inputData)
      .pipe(catchError(this.handleError));
  }
  getUserById(id: string): Observable<response> {
    return this.http
      .get<response>(`https://localhost:7225/api/User/${id}`)
      .pipe(catchError(this.handleError));
  }
}
