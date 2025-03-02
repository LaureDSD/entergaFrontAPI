import { Component, Input } from '@angular/core';
import { ServicioAPIService } from '../../servicio/servicio-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  @Input() titulo : string = "API-RPG"
  @Input() enlaces : string[][] = [["Home","/inicio"],["Jugar","/juego"],["Reglas","/reglas"]]

  constructor(private authService: ServicioAPIService, private router: Router) {}


  hayToken(): boolean {
    return this.authService.isAuthenticated();
  }

  borrarToken(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }


  buscar: string  = ""


  buscarGeneral(texto : string) {
    this.router.navigate(['/buscar/',texto]);
  }

}
