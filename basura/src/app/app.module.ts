import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ErrorComponent } from './paginas/error/error.component';
import { PersonajesComponent } from './paginas/personajes/personajes.component';
import { CreacionPersonajeComponent } from './paginas/creacion-personaje/creacion-personaje.component';
import { JuegoComponent } from './paginas/juego/juego.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { LoginComponent } from './paginas/login/login.component';
import { NavbarComponent } from './componenetes/navbar/navbar.component';
import { CarrouselComponent } from './componenetes/carrousel/carrousel.component';
import { FooterComponent } from './componenetes/footer/footer.component';

import { FormsModule } from '@angular/forms';
import { NavtabComponent } from './componenetes/navtab/navtab.component';
import { SeccionComponent } from './componenetes/seccion/seccion.component';
import { CardComponent } from './componenetes/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { ReglasComponent } from './paginas/reglas/reglas.component';
import { DetalleComponent } from './paginas/detalle/detalle.component';
import { SpinningComponent } from './componenetes/spinning/spinning.component';
import { BuscarComponent } from './paginas/buscar/buscar.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ErrorComponent,
    PersonajesComponent,
    CreacionPersonajeComponent,
    JuegoComponent,
    RegistroComponent,
    LoginComponent,
    NavbarComponent,
    CarrouselComponent,
    FooterComponent,
    NavtabComponent,
    SeccionComponent,
    CardComponent,
    ReglasComponent,
    DetalleComponent,
    SpinningComponent,
    BuscarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
