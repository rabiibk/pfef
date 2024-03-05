import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Conge} from "../model/conge.model";
import {ApiResponse} from "../model/api.response";

@Injectable({
  providedIn: 'root'
})
export class CongeService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://192.168.12.150:8090/api/conges/';

  getConges(): Observable<Conge[]> {
    return this.http.get<Conge[]>(this.baseUrl);
  }

  getCongeById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  createConge(conge: Conge): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, conge);
  }

  updateConge(id: number, conge: Conge): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + conge.id, conge);
  }

  deleteConge(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }

}
