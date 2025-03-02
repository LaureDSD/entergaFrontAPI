import { ApplicationInitStatus, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioAPIService } from '../../servicio/servicio-api.service';

@Component({
  selector: 'app-registro',
  standalone: false,
  templateUrl: './registro.component.html',
  styles: ``
})
export class RegistroComponent {
  usuario: any = {
    nombre_usuario_pub: '',
    nombre_usuario_priv: '',
    correo: '',
    contraseña: '',
    imagen_perfil: '',
    limite_personajes: 3,
    tipoUsuario: null
  };
  errorMessage: any;
  
  constructor(private authService: ServicioAPIService, private router : Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService.register(this.usuario).subscribe(
      (response) => {
        console.log('Usuario registrado exitosamente', response);
        this.redireccionar()
      },
      (error) => {
        console.error('Error', error);
        this.errorMessage = error.error || 'Error';
      }
    );
  }

  redireccionar(){
     this.router.navigate(["/login"])
  }
  
}