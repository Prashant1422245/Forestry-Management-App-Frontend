import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Land } from './land';
@Injectable({
  providedIn: 'root'
})
export class LandService {

  private baseURL = 'http://localhost:8085/Land/';

  constructor(private httpClient: HttpClient) { }

  getListOfLands(): Observable<Land[]> {
    return this.httpClient.get<Land[]>(`${this.baseURL}` + 'getAllLands');
  }

  //add new Land (in Admin dashboard - grocery management)
  createLand(land: Land): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + 'save', land);
  }
  //get Land surveyNumber (for Update a particular Land)
  getLandBySurveyNumber(surveyNumber: String): Observable<Land> {
    return this.httpClient.get<Land>(`${this.baseURL}` + `/getland/${surveyNumber}`);
  }

  //Update a land(in admin- Land management)
  UpdateLand(land: Land): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}` + `/update`, land);
  }
  deleteLand(surveyNumber: String): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${surveyNumber}`);
  }


}
