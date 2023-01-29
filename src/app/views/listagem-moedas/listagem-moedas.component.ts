import { MoedaService } from './moeda.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listagem-moedas',
  templateUrl: './listagem-moedas.component.html',
  styleUrls: ['./listagem-moedas.component.css'],
})
export class ListagemMoedasComponent {
  constructor(private MoedaService: MoedaService) {}
  listarMoedas() {
    this.MoedaService.listarMoedas()
      .then((Symbol) => console.log(Symbol))
      .catch((error) => console.log(error));
  }
}
