import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, shareReplay, map } from 'rxjs/operators';
import { User } from 'src/app/model/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url: string = 'http://localhost:8080/market-bazaar/admin/login';
  user!: User;
  constructor(private http: HttpClient) {}

  loginAuthenticate(username: string, password: string): Observable<any> {
    const options = new HttpHeaders({
      'Content-Type': 'application/json',
      'No-Auth': 'true',
    });
    const data = {
      username,
      password,
    };
    return this.http
      .post(this.url, data, { headers: options, responseType: 'text' })
      .pipe(
        // catchError(this.handleError) 
        catchError(err=> {throw err.error})
      );
  }

  private handleError(err: HttpErrorResponse): Observable<any> {
    let errMsg = '';
    if (err.error instanceof Error) {
      console.log('An error Occured: ', err.error.message);
      errMsg = err.error.message;
    } else {
      console.log(`Backend returned code ${err.status}`);
      errMsg = err.error.status;
    }
    return throwError(() => errMsg);
  }
}
