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

const routes: Routes = [
  
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'reglas', component: ReglasComponent, canActivate: [AuthGuard] },
  { path: 'registro', component: RegistroComponent },
  { path: 'detalle/:ruta', component: DetalleComponent , canActivate: [AuthGuard]},
  { path: 'detalle/:seccion/:id', component: DetalleComponent, canActivate: [AuthGuard] },
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
