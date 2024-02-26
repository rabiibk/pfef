import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: string = '';
  matricule: number = 0;

  constructor(private authService: AuthService,  private router: Router) {}



    login(): void {
        if (this.name && this.matricule) {
            this.authService.login(this.name, this.matricule).subscribe(
                (response: { name: string, matricule: number }) => {
                    console.log('Authentification réussie login', response);
                    console.log(response);

                    this.authService.setUserName(response.name);
                    // Définissez le nom d'utilisateur dans le service authService
                    this.router.navigate(['/']); // Rediriger l'utilisateur vers la page principale
                },
                error => {
                    console.error('Erreur lors de la connexion :', error);
                }
            );
        } else {
            console.error('Erreur : nom d\'utilisateur ou matricule manquant');
        }
    }


    logout(): void {
        this.authService.logout();
    }

}

