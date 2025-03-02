import { ApplicationInitStatus, Component, Input, OnInit, Output } from '@angular/core';
import { ServicioAPIService } from '../../servicio/servicio-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seccion',
  standalone: false,
  templateUrl: './seccion.component.html'
})
export class SeccionComponent implements OnInit{

  @Input() busqueda : string = ""
  @Input() ruta : string = ""
  @Input() titulo : string = ""
  lista : any[] = []
  @Output() elementos : any[] = []
  
  error: string ="";
  cargando: boolean = true; 

  constructor(private activateRoute: ActivatedRoute, private servicio: ServicioAPIService) {}

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.busqueda = params['texto'] || '';
      this.cargarSeccion();
    });
  }
  
  cargarSeccion() {
    this.servicio.obtenerSeccion(this.ruta + "/").subscribe(
      data => {
        console.log("Seccion >>>>>> " + this.busqueda);
        this.lista = data;
        this.cargando = false;
        
        this.elementos = this.busqueda ? this.filtrarResultados(this.lista) : this.lista;
      },
      error => {
        this.error = 'Error de carga';
        this.cargando = false;
      }
    );
  }
  
  filtrarResultados(data: any[]): any[] {
    return data.filter((dato: { nombre: string; descripcion: string }) =>
      dato.nombre?.toLowerCase().includes(this.busqueda.toLowerCase()) ||
      dato.descripcion?.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }
}  
