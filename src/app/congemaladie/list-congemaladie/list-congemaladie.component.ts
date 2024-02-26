import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {CongeMaladie} from "../../model/congemaladie.model";
import {CongemaladieService} from "../../service/congemaladie.service";

@Component({
  selector: 'app-list-congemaladie',
  templateUrl: './list-congemaladie.component.html',
  styleUrl: './list-congemaladie.component.css'
})
export class ListCongemaladieComponent implements OnInit {

  CongeMaladies: Observable<CongeMaladie[]> | null = null;
  @Input() matricule: number | null = null;

  // matricule$!: Observable<number>;
  matricule$!: Observable<number | null>;


  name$!: Observable<string | null>;

  protected name: string | null = null;

  constructor(
    private congeMaladieService: CongemaladieService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchCongeMaladie();

    this.matricule$ = this.authService.getMatricule();
    this.name$ = this.authService.getUserName();
    this.authService.getUserName().subscribe(
      name => {
        this.name = name; // Assigner la valeur du nom d'utilisateur obtenue à la variable name
      },
      error => {
        console.error('Erreur lors de la récupération du nom d\'utilisateur:', error);
      }
    );

    this.authService.getMatricule().subscribe(
      matricule => {
        this.matricule = matricule; // Assigner la valeur du matricule obtenu à la variable matricule
      },
      error => {
        console.error('Erreur lors de la récupération du matricule:', error);
      }
    );
  }

  fetchCongeMaladie(): void {
    this.CongeMaladies = this.congeMaladieService.getCongesMaladie();
  }

  deleteAbsence(id: number): void {
    this.congeMaladieService.deleteCongeMaladie(id)
      .subscribe(
        data => {
          console.log(data);
          this.fetchCongeMaladie;
        },
        error => console.log(error)
      );
  }

  updateAbsence(id: number): void {
    this.router.navigate(['updateCM', id]);
  }
}
