import { Component , OnInit } from '@angular/core';

import {Absence} from "../../model/absence.model";
import {Router} from "@angular/router";
import {AbsenceService} from "../../service/absence.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-create-absence',
  templateUrl: './create-absence.component.html',
  styleUrl: './create-absence.component.css'
})
export class CreateAbsenceComponent implements OnInit{

  absence: Absence = new Absence();
  submitted = false;

  constructor(private absenceService: AbsenceService,
              private router: Router) { }


  ngOnInit(){}


  onSubmit() {
    this.submitted = true;
    this.absenceService.createAbsence(this.absence)
      .subscribe(data => console.log(data), error => console.log(error));
    this.absence = new Absence();
    this.router.navigate(['/absences']);
  }

}
