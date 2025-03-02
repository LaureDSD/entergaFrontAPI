import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioAPIService } from '../../servicio/servicio-api.service';

@Component({
  selector: 'app-detalle',
  standalone: false,
  templateUrl: './detalle.component.html'
})
export class DetalleComponent implements OnInit {
  elemento: any = {};
  objectKeys = Object.keys;
  seccion: string = '';
  id: string = '';
  errorMessage: string = '';
  listaItems : any[] = []

  constructor(
    private servicio: ServicioAPIService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.seccion = params.get('seccion')!;
      this.id = params.get('id')!;
      this.cargarDetalles(this.seccion, this.id);
    });
  }

  cargarDetalles(seccion: string, id: string): void {
    this.servicio.obtenerSeccion(`${seccion}/${id}`).subscribe({
      next: (response) => {
        console.log(seccion,id)
        this.elemento = response; 
         this.listaItems = this.elemento.drops ?? this.elemento.recompensas ?? []
      },
      error: (err) => {
        this.errorMessage = 'Error de carga';
        console.error('Error en detalles:', err);
      }
    });
  }
}