import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';

import { User } from '../../data/schema/user';
import { HttpClient, HttpErrorResponse,  } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
interface LoginContextInterface {
  username: string;
  password: string;
  token: string;
}

const defaultUser = {
  username: 'Mathis',
  password: '12345',
  token: '12345'
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  constructor(private http: HttpClient) { }

  login(data): Observable<any> {
    return this.http.post('http://localhost:5300/login', data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  checkLogin(data){
    return this.http.post('http://localhost:5300/login', data).map(
      (result: Response) => {
        // debugger;
        console.log(result);
      }
    )
  }

  // private parseResponse(obj) {
  //   return Object.keys(obj).map(key => obj[key]);
  // }

  // userList() {
    // return this.http.get('http://localhost:5300/login')
    //   .pipe(map(r => this.parseResponse(r)))
  // }



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

  logout(): Observable<boolean> {
    return of(false);
  }

  getToken() {
    return this.getToken;
  }
}


