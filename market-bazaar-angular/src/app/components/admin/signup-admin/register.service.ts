import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { User } from 'src/app/model/user.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  url: string = 'http://localhost:8080/market-bazaar/users';
  user!: User;
  constructor(private http: HttpClient) {}

  saveRegistration(user: User): Observable<any> {
    const data = {
      username: user.username,
      password: user.password,
      userDetails: {
        email: user.email,
      },
    };
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.url, data, { headers: options });
    // .pipe(
    //   tap((a) => {
    //     console.log(a);
    //   })
    // );
  }
  //updating the user profile page
  udpateUserProfile(id: any, user: User): Observable<any> {
    console.log("url ", this.url+`/${id}`)
    const data = {
      id: parseInt(id),
      userDetails: {
        firstname:user.firstname,
        middlename:user.middlename,
        lastname:user.lastname,
        email: user.email,
        street_address:user.street_address,
        city: user.city,
        state: user.state,
        zip:user.zip,
        country: user.country,
        status:true, // true mean active status
      },
    };
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
    .put<any>(this.url+`/${id}` , data, { headers: options })
    .pipe(
      // tap(()=>console.log("here i am"))
    );
  }
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUserById(id: any): Observable<any> {
    return this.getUser().pipe(
      map((user) => user.find((user) => user.id == id))
    );
  }
  findUserExistsorNot(username: string) {
    console.log(this.getUser());
    // return this.getUser();
  }
}
