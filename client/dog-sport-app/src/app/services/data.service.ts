import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trial } from '../models/trial';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private trialsUrl = 'http://localhost:8082/api/groups/';

  jsonContentTypeHeaders = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  };
   
  constructor(private http: HttpClient) { }

  /* Create Trial */
  createTrial<Trial>(trial: Trial): Observable<Trial> {
    console.log("createTrial");
    console.log(trial);
    const results : Observable<Trial> = this.http.post<Trial>(this.trialsUrl, trial, this.jsonContentTypeHeaders);
    return results;
  }

  /* Update Trial */
  updateTrial<Trial>(trial: Trial): Observable<Trial> {
    const results : Observable<Trial> = this.http.put<Trial>(this.trialsUrl, trial, this.jsonContentTypeHeaders);
    return results;
  }

  /* Retrieve All Trials */
  getAllTrials<T>(): Observable<T> {
    return this.http.get<T>(this.trialsUrl);
  }

  /* Retrieve Trial By Id */
  getTrialById<T>(groupId: string): Observable<Trial> {
    const results: Observable<Trial> = this.http.get<Trial>(this.trialsUrl + groupId);
    return results;
  }

  /* Delete Trial */

  deleteTrialById<Trial>(groupId: string): Observable<Trial> {
    const results : Observable<Trial> = this.http.delete<Trial>(this.trialsUrl + groupId);
    return results;
  }

  /* Add Member to Trial */
  addMemberToTrial<Trial>(trialId: number, member: Member): Observable<Trial> {
    const results : Observable<Trial> = this.http.post<Trial>(`this.trialsUrl{trialId}/members`,member, this.jsonContentTypeHeaders);
    return results;
  }
  
  /* Update Member in Trial */
  updateMemberInTrial<Trial>(trialId: number, member: Member): Observable<Trial> {
    const results : Observable<Trial> = this.http.put<Trial>(`this.trialsUrl{trialId}/members`,member, this.jsonContentTypeHeaders);
    return results;
  }

  /* Delete Member from Trial */
  deleteMemberFromTrial<Trial>(trialId: number, memberId: number): Observable<Trial> {
    const results : Observable<Trial> = this.http.delete<Trial>(`this.trialsUrl{trialId}/members/{memberId}`);
    return results;
  }
}
