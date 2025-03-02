import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navtab',
  standalone: false,
  templateUrl: './navtab.component.html'
})
export class NavtabComponent {
  @Input() filtros : any[] = []
  @Output() buttonClicked = new EventEmitter<string>();

  constructor(private router: Router){}

  onButtonClick(buttonName: string) {
    this.buttonClicked.emit(buttonName);  
  }


}
