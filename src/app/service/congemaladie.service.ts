import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CongeMaladie} from "../model/congemaladie.model";
import {ApiResponse} from "../model/api.response";

@Injectable({
  providedIn: 'root'
})
export class CongemaladieService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://192.168.12.150:8090/api/congesmaladies/';

  getCongesMaladie(): Observable<CongeMaladie[]> { // Modifiez le type de retour ici
    return this.http.get<CongeMaladie[]>(this.baseUrl); // Retourne directement un Observable de tableau d'Employee
  }

  getCongeMaladieById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  createCongeMaladie(congeMaladie: CongeMaladie): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, congeMaladie);
  }

  updateCongeMaladie(id: number, congeMaladie: CongeMaladie): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + congeMaladie.id, congeMaladie);
  }

  deleteCongeMaladie(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }

}
