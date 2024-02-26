import {Component, Input, OnInit} from '@angular/core';
import { AuthService } from '../service/auth.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAdmin: boolean = false; // Détermine si l'utilisateur est un administrateur
    @Input() name: string | null = null;
    @Input() matricule: number | null = null;
    name$!: Observable<string>;
    matricule$!: Observable<number | null>;

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
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

    logout(): void {
        this.authService.logout();
    }


}
