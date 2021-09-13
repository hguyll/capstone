import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private eventsUrl = 'http://localhost:8082/api/groups/';
  private sportsUrl = 'http://localhost:8082/api/organizations/';

  private eventsRequest = new HttpRequest('GET', this.eventsUrl);
  private sportsRequest = new HttpRequest('GET', this.sportsUrl);

  constructor(private http: HttpClient) { 

  }

  getAllEvents<T>(): Observable<T> {
    return this.http.get<T>(this.eventsUrl);
  }
}
