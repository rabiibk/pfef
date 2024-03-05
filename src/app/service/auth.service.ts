import {BehaviorSubject, map, Observable, Subject, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private baseUrl = 'http://192.168.12.150:8090';
    private loggedIn: boolean = false;
    private name: string = '';
    private matricule: number = 0 ;
    private nameSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
    public name$: Observable<string> = this.nameSubject.asObservable();
    private matriculeSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    private matricule$: Observable<number> = this.matriculeSubject.asObservable();

    constructor(private http: HttpClient,  private router: Router) {}

    login(name: string, matricule: number): Observable<{ name: string, matricule: number }> {
        return this.http.post<any>(`${this.baseUrl}/login`, { name, matricule }).pipe(
            map(response => {
                const message = response && response.message ? response.message : '';
                const [namePart, matriculePart] = message.split(','); // Séparez le message en nom et matricule
                const name = namePart.split(':')[1].trim(); // Extrait le nom de la partie correspondante
                const matricule = parseInt(matriculePart); // Convertit la partie du matricule en nombre
                this.setUserName(name);
                this.setMatricule(matricule);
                console.log('Authentification réussie pour l\'utilisateur :', name);
                console.log('Matricule de l\'utilisateur :', matricule);
                return { name, matricule };
            })
        );
    }


    getUserName(): Observable<string> {
        return this.name$;
        console.log('getusername', this.name);
    }
    getMatricule(): Observable<number | null> {
        return this.matricule$;
    }

    setUserName(name: string): void {
        this.nameSubject.next(name);
        this.loggedIn = true;
    }

    setMatricule(matricule: number): void {
        this.matriculeSubject.next(matricule);
    }

  logout(): void {
    // Réinitialiser les états
    this.loggedIn = false;
    this.name = '';
    this.matricule = 0; // Réinitialiser la variable matricule à 0

    // Naviguer vers la page d'accueil
    this.router.navigate(['/']);
  }

}
