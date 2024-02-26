import { Component } from '@angular/core';
import {ApiResponse} from "../../model/api.response";
import {ActivatedRoute, Router} from "@angular/router";
import {CongeMaladie} from "../../model/congemaladie.model";
import {CongemaladieService} from "../../service/congemaladie.service";

@Component({
  selector: 'app-update-congemaladie',
  templateUrl: './update-congemaladie.component.html',
  styleUrl: './update-congemaladie.component.css'
})
export class UpdateCongemaladieComponent  {
  id!: number;
  congeMaladie!: CongeMaladie;
apiResponse!:ApiResponse;

constructor(private route: ActivatedRoute,private router: Router,
  private congeMaladieService: CongemaladieService) { }

ngOnInit() {
  this.congeMaladie = new CongeMaladie();

  this.id = this.route.snapshot.params['id'];
  this.congeMaladieService.getCongeMaladieById(this.id)
    .subscribe(data => {
      console.log(data)
      this.congeMaladie = data;
    }, error => console.log(error));
}

onSubmit() {
  this.congeMaladieService.updateCongeMaladie(this.id, this.congeMaladie)
    .subscribe(data => console.log(data), error => console.log(error));
  this.congeMaladie = new CongeMaladie();
  this.router.navigate(['/congeMaladies']);
}


list(){
  this.router.navigate(['congeMaladies']);
}

}

