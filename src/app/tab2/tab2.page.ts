import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  nombre: string = 'Luciano';
  apellido: string = 'Alive';
  nro_documento: string = '35.064.541';
  constructor() {}

}
