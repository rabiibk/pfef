import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import {CongeMaladie} from "../../model/congemaladie.model";
import {CongemaladieService} from "../../service/congemaladie.service";

@Component({
  selector: 'app-create-congemaladie',
  templateUrl: './create-congemaladie.component.html',
  styleUrl: './create-congemaladie.component.css'
})
export class CreateCongemaladieComponent implements OnInit{

  congeMaladie: CongeMaladie = new CongeMaladie();
  submitted = false;

  constructor(private congeMaladieService: CongemaladieService,
              private router: Router) { }


  ngOnInit(){}


  onSubmit() {
    this.submitted = true;
    this.congeMaladieService.createCongeMaladie(this.congeMaladie)
      .subscribe(data => console.log(data), error => console.log(error));
    this.congeMaladie = new CongeMaladie();
    this.router.navigate(['/congeMaladies']);
  }

}
