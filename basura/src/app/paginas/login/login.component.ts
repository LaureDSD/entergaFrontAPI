import { Component } from '@angular/core';
import { ServicioAPIService } from '../../servicio/servicio-api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html'
})
export class LoginComponent {
  correo: string = '';
  contrasena: string = '';
  errorMessage: string = '';

  constructor(private servicioAPIService:ServicioAPIService , private router: Router) {}

  onSubmit(): void {
    if (this.correo && this.contrasena) {
      this.servicioAPIService.saveUser(this.correo);
      this.servicioAPIService.login({ correo: this.correo, contraseña: this.contrasena }).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/inicio']);
        },
        error: (err) => {
          this.errorMessage = 'Credenciales no válidas';
        }
      });
    } else {
      this.errorMessage = 'Por favor ingresa tu correo y contraseña';
    }
  }


}
