import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html'
})
export class InicioComponent {

  secciones : any = [
    ["mapas","mapa",true]
    ,["monstruos","monstruo",true]
    ,["items","item",true]
    ,["misiones","mision",true]
    ,["grupos","grupos",true]
    ,["habilidades","habilidad",true]
    ,["npcs","npc",true]
    ,["efectos","efectos",true],]
    
    pulsarBoton(buttonName: string) {
      if (buttonName === 'todo') {
        this.secciones.forEach((seccion: any) => {
          seccion[2] = true;
        });
      } else {
        this.secciones.forEach((seccion: any) => {
          seccion[2] = false;
        });
        const selectedSection = this.secciones.find((seccion: any) => seccion[0] === buttonName);
        if (selectedSection) {
          selectedSection[2] = true;
        }
      }
    }
}
