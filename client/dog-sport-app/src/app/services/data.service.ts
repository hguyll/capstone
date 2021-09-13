import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trial } from '../models/trial';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private trialsUrl = 'http://localhost:8082/api/groups/';
  private sportsUrl = 'http://localhost:8082/api/organizations/';

  constructor(private http: HttpClient) { 

  }

  getAllTrials<T>(): Observable<T> {
    return this.http.get<T>(this.trialsUrl);
  }

  getTrialById<T>(groupId: string): Observable<Trial> {
    const results: Observable<Trial> = this.http.get<Trial>(this.trialsUrl + groupId);
    return results;
  }

}
