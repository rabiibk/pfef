import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Conge} from "../../model/conge.model";
import {CongeService} from "../../service/conge.service";


@Component({
  selector: 'app-create-conge',
  templateUrl: './create-conge.component.html',
  styleUrl: './create-conge.component.css'
})
export class CreateCongeComponent implements OnInit {

  conge: Conge = new Conge();
  submitted = false;

  constructor(private congeService: CongeService,
              private router: Router) { }


  ngOnInit(){}


  onSubmit() {
    this.submitted = true;
    this.congeService.createConge(this.conge)
      .subscribe(data => console.log(data), error => console.log(error));
    this.conge = new Conge();
    this.router.navigate(['/conges']);
  }



}
