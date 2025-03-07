import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = 'http://localhost:9000/users';
  loggedIn = false;
  constructor(private httpClient: HttpClient) {}

  checkLogin(userObj: User): Observable<boolean> {
    return this.httpClient.post<boolean>(`${this.baseUrl}/login`, userObj);
  }

  logout() {
    localStorage.removeItem('user');
  }

  registerUser(userObj: User): Observable<boolean> {
    return this.httpClient.post<boolean>(`${this.baseUrl}/register`, userObj);
  }
}
