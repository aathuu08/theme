import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  private parseResponse(obj){
    return Object.keys(obj).map(key => obj[key]);
    }
   getCategories() {
     return this.http.get('http://localhost:5300/category')
     .pipe(map(r => this.parseResponse(r)))
   }


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


