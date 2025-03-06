import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LoginComponent } from './paginas/login/login.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { ErrorComponent } from './paginas/error/error.component';

import { AuthGuard } from './servicio/auth-guard.service';
import { ReglasComponent } from './paginas/reglas/reglas.component';
import { DetalleComponent } from './paginas/detalle/detalle.component';
import { BuscarComponent } from './paginas/buscar/buscar.component';
import { PersonajesComponent } from './paginas/personajes/personajes.component';
import { JuegoComponent } from './paginas/juego/juego.component';

const routes: Routes = [
  
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'reglas', component: ReglasComponent, canActivate: [AuthGuard] },
  { path: 'registro', component: RegistroComponent },
  { path: 'detalle/:ruta', component: DetalleComponent , canActivate: [AuthGuard]},
  { path: 'detalle/:ruta', component: DetalleComponent , canActivate: [AuthGuard]},
  //juego
  //{ path: 'juego/:usuarioid', component: JuegoInicioComponent, canActivate: [AuthGuard] },
  { path: 'juego/:usuarioid/personajes/', component: PersonajesComponent, canActivate: [AuthGuard] },
  //{ path: 'juego/:usuarioid/creacionpPersonajes/', component: CreacionPersonajesComponent, canActivate: [AuthGuard] },
  { path: 'juegoPartida/:usuarioid/personaje/:idpersonaje', component: JuegoComponent, canActivate: [AuthGuard] },
  //juego
  { path: 'buscar/', component: BuscarComponent , canActivate: [AuthGuard]},
  { path: 'buscar/:texto', component: BuscarComponent , canActivate: [AuthGuard]},
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: 'login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
