import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/index';
import { ApiResponse } from '../model/api.response';
import { Employee } from '../model/employee.model';


@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8090/api/employees/';

  getEmployees(): Observable<Employee[]> { // Modifiez le type de retour ici
    return this.http.get<Employee[]>(this.baseUrl); // Retourne directement un Observable de tableau d'Employee
  }

  getEmployeeById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  createEmployee(employee: Employee): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, employee);
  }

  updateEmployee(id: number, employee: Employee): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + employee.id, employee);
  }

  deleteEmployee(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}
