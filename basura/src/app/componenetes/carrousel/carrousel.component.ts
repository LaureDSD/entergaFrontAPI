import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  standalone: false,
  templateUrl: './carrousel.component.html',
  styles: ``
})
export class CarrouselComponent {

  @Input() carr : string[] = ["/carro1.png","/carro2.png","/carro3.png"]

  constructor(){}

}
