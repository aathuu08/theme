import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class ThemeapiService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  private parseResponse(obj){
    return Object.keys(obj).map(key => obj[key]);
    }
   getList() {
     return this.http.get('http://localhost:5300/inventory')
     .pipe(map(r => this.parseResponse(r)))
   }

  // // Get all employees

  // getLists() {
  //   return this.http.get(`${environment.API_URL}`);
  // }

  // Error handling 

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


