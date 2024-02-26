import { Component } from '@angular/core';

import {ApiResponse} from "../../model/api.response";
import {Absence} from "../../model/absence.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AbsenceService} from "../../service/absence.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-update-absence',
  templateUrl: './update-absence.component.html',
  styleUrl: './update-absence.component.css'
})
export class UpdateAbsenceComponent {

  id!: number;
  absence!: Absence;
  apiResponse!:ApiResponse;

  constructor(private route: ActivatedRoute,private router: Router,
              private absenceService: AbsenceService) { }

  ngOnInit() {
    this.absence = new Absence();

    this.id = this.route.snapshot.params['id'];
    this.absenceService.getAbsenceById(this.id)
        .subscribe(data => {
          console.log(data)
          this.absence = data;
        }, error => console.log(error));
  }

  onSubmit() {
    this.absenceService.updateAbsence(this.id, this.absence)
        .subscribe(data => console.log(data), error => console.log(error));
    this.absence = new Absence();
    this.router.navigate(['/absences']);
  }


  list(){
    this.router.navigate(['absences']);
  }

}
