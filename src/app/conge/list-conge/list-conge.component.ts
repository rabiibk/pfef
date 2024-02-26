import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {Conge} from "../../model/conge.model";
import {CongeService} from "../../service/conge.service";

@Component({
  selector: 'app-list-conge',

  templateUrl: './list-conge.component.html',
  styleUrl: './list-conge.component.css'
})
export class ListCongeComponent {


  conges: Observable<Conge[]> | null = null;
  @Input() matricule: number | null = null;

  matricule$!: Observable<number | null>;


  name$!: Observable<string | null>;

  protected name: string | null = null;

  constructor(
    private congeService: CongeService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchConges();

    this.matricule$ = this.authService.getMatricule();
    this.name$ = this.authService.getUserName();
    this.authService.getUserName().subscribe(
      name => {
        this.name = name;
      },
      error => {
        console.error('Erreur lors de la récupération du nom d\'utilisateur:', error);
      }
    );

    this.authService.getMatricule().subscribe(
      matricule => {
        this.matricule = matricule;
      },
      error => {
        console.error('Erreur lors de la récupération du matricule:', error);
      }
    );
  }

  fetchConges(): void {
    this.conges = this.congeService.getConges();
  }

  deleteConge(id: number): void {
    this.congeService.deleteConge(id)
      .subscribe(
        data => {
          console.log(data);
          this.fetchConges();
        },
        error => console.log(error)
      );
  }

  updateConge(id: number): void {
    this.router.navigate(['updateconge', id]);
  }

}
