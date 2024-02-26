import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  isAdmin = false;
  name: string | null = null;


  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUserName().subscribe(
        name => {
          this.name = name;
          this.isLoggedIn = !!name;
          this.isAdmin = name === 'admin';
        },
        error => {
          console.error('Erreur lors de la récupération du nom d\'utilisateur:', error);
        }
    );
  }
}
