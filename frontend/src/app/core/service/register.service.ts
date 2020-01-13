import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';



@Injectable({

  providedIn: 'root'

})

export class RegisterService {

  constructor(private http: HttpClient) { }

  createUser(data): Observable<any> {
   
    return this.http.post('http://localhost:5300/register', data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }
  // errorMgmt(errorMgmt: any): import("rxjs").OperatorFunction<Object, any> {
    // throw new Error("Method not implemented.");
    errorMgmt(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    }
}
