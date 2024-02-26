import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './service/employee.service';

import { AbsenceService } from './service/absence.service';
import { ListAbsenceComponent } from './absence/list-absence/list-absence.component';
import { UpdateAbsenceComponent } from './absence/update-absence/update-absence.component';
import { CreateAbsenceComponent } from './absence/create-absence/create-absence.component';

import { HttpClientModule } from '@angular/common/http';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { DataTablesModule } from 'angular-datatables';
import {ContentComponent} from './content/content.component';
import { TopbarComponent } from './topbar/topbar.component';
import {LoginComponent} from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';


import { AuthService } from './service/auth.service';
import {CreateCongeComponent} from "./conge/create-conge/create-conge.component";
import {ListCongeComponent} from "./conge/list-conge/list-conge.component";
import {UpdateCongeComponent} from "./conge/update-conge/update-conge.component";
import {UpdateCongemaladieComponent} from "./congemaladie/update-congemaladie/update-congemaladie.component";
import {ListCongemaladieComponent} from "./congemaladie/list-congemaladie/list-congemaladie.component";
import {CongeService} from "./service/conge.service";
import {CongemaladieService} from "./service/congemaladie.service";
import {CreateCongemaladieComponent} from "./congemaladie/create-congemaladie/create-congemaladie.component";


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    TopbarComponent ,
    NavbarComponent,
    LoginComponent,

    CreateEmployeeComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,

    UpdateAbsenceComponent,
    ListAbsenceComponent,
    CreateAbsenceComponent,

    CreateCongeComponent,
    ListCongeComponent,
    UpdateCongeComponent,

    UpdateCongemaladieComponent,
    ListCongemaladieComponent,
    CreateCongemaladieComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [
    EmployeeService, AbsenceService ,AuthService , CongeService , CongemaladieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
