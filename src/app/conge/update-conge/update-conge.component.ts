import { Component } from '@angular/core';
import {ApiResponse} from "../../model/api.response";
import {ActivatedRoute, Router} from "@angular/router";
import {Conge} from "../../model/conge.model";
import {CongeService} from "../../service/conge.service";

@Component({
  selector: 'app-update-conge',
  templateUrl: './update-conge.component.html',
  styleUrl: './update-conge.component.css'
})
export class UpdateCongeComponent {
  id!: number;
  conge!: Conge;
  apiResponse!:ApiResponse;

  constructor(private route: ActivatedRoute,private router: Router,
              private congeService: CongeService) { }

  ngOnInit() {
    this.conge = new Conge();

    this.id = this.route.snapshot.params['id'];
    this.congeService.getCongeById(this.id)
      .subscribe(data => {
        console.log(data)
        this.conge = data;
      }, error => console.log(error));
  }

  onSubmit() {
    this.congeService.updateConge(this.id, this.conge)
      .subscribe(data => console.log(data), error => console.log(error));
    this.conge = new Conge();
    this.router.navigate(['/conges']);
  }


  list(){
    this.router.navigate(['conges']);
  }


}
