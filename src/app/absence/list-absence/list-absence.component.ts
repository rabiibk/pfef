// import {Component, Input, OnInit} from '@angular/core';
// import {Observable} from "rxjs";
// import {Absence} from "../../model/absence.model";
// import {Router} from "@angular/router";
// import {AbsenceService} from "../../service/absence.service";
// import {AuthService} from "../../service/auth.service";
//
//
// @Component({
//   selector: 'app-list-absence',
//   templateUrl: './list-absence.component.html',
//   styleUrl: './list-absence.component.css'
// })
// export class ListAbsenceComponent  implements OnInit{
//
//   absences: Observable<Absence[]> | null = null;
//     @Input() matricule: number | null = null;
//     name$!: Observable<string>;
//     matricule$!: Observable<number>;
//    // protected name: string | null = null;
//
//
//
//     constructor(private absenceService: AbsenceService,private authService: AuthService,
//                 private router: Router) {}
//
//     ngOnInit(): void {
//         this.fetchAbsences();
//
//         this.matricule$ = this.authService.getMatricule();
//         this.name$ = this.authService.getUserName();
//         this.authService.getUserName().subscribe(
//             name => {
//                 this.name = name; // Assigner la valeur du nom d'utilisateur obtenue à la variable name
//             },
//             error => {
//                 console.error('Erreur lors de la récupération du nom d\'utilisateur:', error);
//             }
//         );
//
//         this.authService.getMatricule().subscribe(
//             matricule => {
//                 this.matricule = matricule; // Assigner la valeur du matricule obtenu à la variable matricule
//             },
//             error => {
//                 console.error('Erreur lors de la récupération du matricule:', error);
//             }
//         );
//     }
//     fetchAbsences(): void {
//         this.absences = this.absenceService.getAbsences();
//     }
//
//
//
//     deleteAbsence(id: number): void {
//         this.absenceService.deleteAbsence(id)
//             .subscribe(
//                 data => {
//                     console.log(data);
//                     this.fetchAbsences();
//                 },
//                 error => console.log(error)
//             );
//     }
//
//     updateAbsence(id: number): void {
//         this.router.navigate(['updateAb', id]);
//     }
//
//
//     protected readonly name = name;
// }
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Absence } from "../../model/absence.model";
import { Router } from "@angular/router";
import { AbsenceService } from "../../service/absence.service";
import { AuthService } from "../../service/auth.service";

@Component({
    selector: 'app-list-absence',
    templateUrl: './list-absence.component.html',
    styleUrls: ['./list-absence.component.css']
})
export class ListAbsenceComponent implements OnInit {
    absences: Observable<Absence[]> | null = null;
    @Input() matricule: number | null = null;

   // matricule$!: Observable<number>;
    matricule$!: Observable<number | null>;


    name$!: Observable<string | null>;

    protected name: string | null = null;

    constructor(
        private absenceService: AbsenceService,
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.fetchAbsences();

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

    fetchAbsences(): void {
        this.absences = this.absenceService.getAbsences();
    }

    deleteAbsence(id: number): void {
        this.absenceService.deleteAbsence(id)
            .subscribe(
                data => {
                    console.log(data);
                    this.fetchAbsences();
                },
                error => console.log(error)
            );
    }

    updateAbsence(id: number): void {
        this.router.navigate(['updateAb', id]);
    }
}
