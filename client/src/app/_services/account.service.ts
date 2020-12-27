import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:5001/api/';
  private currentUserResource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserResource.asObservable();
  constructor(private http: HttpClient) { }
  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model)
    .pipe(
      map((user: User) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user))
          this.currentUserResource.next(user)
        }
       return user;
      })
    )
  }
  register(model: any) {
    return this.http.post(this.baseUrl + "account/register", model).pipe(
      map((user: User) => {
        if(user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserResource.next(user);
        }
        return user;
      })
    )
  }
  setCurrentUser(user: User) {
    this.currentUserResource.next(user);
  }
  logout() {
    localStorage.removeItem('user');
    this.currentUserResource.next(null);
  }
}
