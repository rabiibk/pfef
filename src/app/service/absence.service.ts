import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiResponse} from "../model/api.response";
import {Observable} from "rxjs";
import {Absence} from "../model/absence.model";

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8090/api/absences/';

  getAbsences(): Observable<Absence[]> { // Modifiez le type de retour ici
    return this.http.get<Absence[]>(this.baseUrl); // Retourne directement un Observable de tableau d'Employee
  }

  getAbsenceById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  createAbsence(absence: Absence): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, absence);
  }

  updateAbsence(id: number, absence: Absence): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + absence.id, absence);
  }

  deleteAbsence(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }


}
