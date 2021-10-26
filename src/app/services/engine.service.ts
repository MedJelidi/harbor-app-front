import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Engine} from '../models/engine';

@Injectable({
  providedIn: 'root'
})
export class EngineService {

  baseUrl = 'http://localhost:3000/api/engine';
  httpOptions = {};

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      withCredentials: true,
      observe: 'response' as 'response'
    };
  }

  getEngines(): Observable<Engine[]> {
    return this.httpClient.get<Engine[]>(this.baseUrl);
  }

  addEngine(body: any): Observable<any> {
    return this.httpClient.post(this.baseUrl, body);
  }

  editEngine(body: any, id: any): Observable<any> {
    return this.httpClient.put(this.baseUrl + `/${id}`, body);
  }

  deleteEngine(id: any): Observable<any> {
    return this.httpClient.delete(this.baseUrl + `/${id}`);
  }

  searchEngine(query: any, searchBy: any): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/search/${query}/${searchBy}`);
  }
}
