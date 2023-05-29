import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { response } from '../dashboard/dash/dash.interface';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
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
      .get<response>('https://localhost:7225/api/Appointment/getAll')
      .pipe(catchError(this.handleError));
  }
  addAppointment(inputData: any): Observable<response> {
    return this.http
      .post<response>('https://localhost:7225/api/Appointment', inputData)
      .pipe(catchError(this.handleError));
  }
  getAppointmentById(id: string): Observable<response> {
    return this.http
      .get<response>(`https://localhost:7225/api/Appointment/${id}`)
      .pipe(catchError(this.handleError));
  }
  deleteAppointment(id: string): Observable<response> {
    return this.http
      .delete<response>(`https://localhost:7225/api/Appointment/?id=${id}`)
      .pipe(catchError(this.handleError));
  }
}
