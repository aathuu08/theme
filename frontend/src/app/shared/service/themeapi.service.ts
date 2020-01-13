import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/Observable/throwError';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';  
import { Router } from '@angular/router';
 

@Injectable({
  providedIn: 'root'
})
export class ThemeapiService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private router:Router) { }

  private parseResponse(obj){
    return Object.keys(obj).map(key => obj[key]);
    }
   getList() {
     return this.http.get('http://localhost:5300/inventory')
     .pipe(map(r => this.parseResponse(r)))
   }
getthemeDetails(id)
{ 
  return this.http.get('http://localhost:5300/inventory/'+id+'/detail')
  .map((response: Response) => response); 
}
  
errorMgmt(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}
  
 getcategoryList() {
  return this.http.get('http://localhost:5300/category')
  .pipe(map(r => this.parseResponse(r)))
}

getItemsWithCategory(category) {
  return this.http.get('http://localhost:5300/inventory/' + category + '/Items')
    .pipe(map(r => this.parseResponse(r)))
}

Logout(){
  localStorage.removeItem('appuser');
  localStorage.removeItem('username');
  localStorage.removeItem('password');
  this.router.navigate(['#/auth/home']);
}
  }
