import { Component, Input, input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input() elemento : any
  @Input() seccion : string = ""
  texto : string = ""
  imagen : string = ""
  id : number = 0

  constructor(private router: Router){
  }

  ngOnInit(): void {
    if (this.elemento) {
      this.texto = this.elemento[0].nombre ?? "Error";
      this.imagen = /*this.elemento[0].imagen ??*/ "/favicon.ico";
      //console.log(">>>>>>>>>>>>>>>>>>>>>>>" + this.seccion)
      console.log(this.elemento)
    }
  }

  cargarDetalle() {
    switch(this.seccion) {
      case "mapas":
        this.id = this.elemento[0].mapa_id;  
        this.router.navigate(["/detalle/mapa/" + this.id]);
        break;
      case "monstruos":
        this.id = this.elemento[0].id;  
        this.router.navigate(["/detalle/monstruo/" + this.id]);
        break;
      case "items":
        this.id = this.elemento[0].item_id; 
        this.router.navigate(["/detalle/item/" + this.id]);
        break;
      case "misiones":
        this.id = this.elemento[0].id; 
        this.router.navigate(["/detalle/mision/" + this.id]);
        break;
      case "grupos":
        this.id = this.elemento[0].grupo_id;  
        this.router.navigate(["/detalle/grupos/" + this.id]);
        break;
      case "habilidades":
        this.id = this.elemento[0].habilidad_id;  
        this.router.navigate(["/detalle/habilidad/" + this.id]);
        break;
      case "npcs":
        this.id = this.elemento[0].id;
        console.log(this.elemento[0]);
        
        this.router.navigate(["/detalle/npc/" + this.id]);
        break;
      case "efectos":
        this.id = this.elemento[0].efecto_id;
        this.router.navigate(["/detalle/efectos/" + this.id]);
        break;
      default:
        console.error("Sección no válida");
        break;
    }
  }
  

}
