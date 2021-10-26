import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:3000/api/user';
  httpOptions = {};
  @Output() private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<any>(undefined);

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      withCredentials: true,
      observe: 'response' as 'response'
    };
  }

  setLoggedIn(value: boolean): void {
    this.loggedIn.next(value);
  }

  getLoggedIn(): BehaviorSubject<boolean> {
    return this.loggedIn;
  }

  register(body: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + '/register', body, this.httpOptions);
  }

  login(body: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + '/login', body, this.httpOptions);
  }

  verify(): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/verify', this.httpOptions);
  }

  logout(): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/logout', this.httpOptions);
  }
}
