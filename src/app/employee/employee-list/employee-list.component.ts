import {Component, OnInit} from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import {map, Observable} from 'rxjs';
import { Router } from '@angular/router';
import { ApiResponse } from '../../model/api.response';
import {AsyncPipe} from "@angular/common";
import {Employee} from "../../model/employee.model";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees: Observable<Employee[]> | null = null;




  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.fetchEmployees();
  }
  fetchEmployees(): void {
    this.employees = this.employeeService.getEmployees();
  }



  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.fetchEmployees(); // Fetch employees again after deletion
        },
        error => console.log(error)
      );
  }

  updateEmployee(id: number): void {
    this.router.navigate(['update', id]);
  }
}
