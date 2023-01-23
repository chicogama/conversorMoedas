import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo-pagina',
  templateUrl: './titulo-pagina.component.html',
  styleUrls: ['./titulo-pagina.component.css'],
  template: '<h1>"{{name}}"</h1>',
})
export class TituloPaginaComponent {}
