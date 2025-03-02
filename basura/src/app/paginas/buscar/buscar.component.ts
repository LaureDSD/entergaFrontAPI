import { Component } from '@angular/core';
import { ServicioAPIService } from '../../servicio/servicio-api.service';
import { ActivatedRoute } from '@angular/router';
import { StringToken } from '@angular/compiler';

@Component({
  selector: 'app-buscar',
  standalone: false,
  templateUrl: './buscar.component.html'
})
export class BuscarComponent {

  busqueda : string = ""

  secciones : any = [
    ["mapas","mapa",true]
    ,["monstruos","monstruo",true]
    ,["items","item",true]
    ,["misiones","mision",true]
    ,["grupos","grupos",true]
    ,["habilidades","habilidad",true]
    ,["npcs","npc",true]
    ,["efectos","efectos",true],]


    constructor( private activateRoute : ActivatedRoute) {}

    ngOnInit(){
      this.activateRoute.params.subscribe(
        params => {
          this.busqueda = params['texto']
        }
      )
    }
}
