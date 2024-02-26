import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { ContentComponent} from './content/content.component';
import { LoginComponent } from './login/login.component';
import {UpdateAbsenceComponent} from "./absence/update-absence/update-absence.component";
import {ListAbsenceComponent} from "./absence/list-absence/list-absence.component";
import {CreateAbsenceComponent} from "./absence/create-absence/create-absence.component";
import {CreateCongeComponent} from "./conge/create-conge/create-conge.component";
import {ListCongeComponent} from "./conge/list-conge/list-conge.component";
import {UpdateCongeComponent} from "./conge/update-conge/update-conge.component";
import {UpdateCongemaladieComponent} from "./congemaladie/update-congemaladie/update-congemaladie.component";
import {ListCongemaladieComponent} from "./congemaladie/list-congemaladie/list-congemaladie.component";
import {CreateCongemaladieComponent} from "./congemaladie/create-congemaladie/create-congemaladie.component";






const routes: Routes = [
  //{ path: '', redirectTo: 'employee', pathMatch: 'full' },

  {path: '', component: ContentComponent},
  { path: 'add', component: CreateEmployeeComponent },
  {path: 'login', component: LoginComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },

  { path: 'addAb', component: CreateAbsenceComponent },
  { path: 'absences', component: ListAbsenceComponent },
  { path: 'updateAb/:id', component: UpdateAbsenceComponent },

  { path: 'conges', component: ListCongeComponent },
  { path: 'addConge', component: CreateCongeComponent },
  { path: 'updateconge/:id', component: UpdateCongeComponent },

  { path: 'congeMaladies', component: ListCongemaladieComponent },
  { path: 'addCongeM', component: CreateCongemaladieComponent },
  { path: 'updateCM/:id', component: UpdateCongemaladieComponent }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
