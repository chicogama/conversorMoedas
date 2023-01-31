import { Observable } from 'rxjs';
import { IMoeda } from '../../model/IMoeda';
import { MoedaService } from './moeda.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-moedas',
  templateUrl: './listagem-moedas.component.html',
  styleUrls: ['./listagem-moedas.component.css'],
})
export class ListagemMoedasComponent implements OnInit {
  moedas: Observable<IMoeda[]>;
  displayedColumns = ['code', 'description'];
  //moedas: Observable<IMoeda[]>;

  constructor(private moedaService: MoedaService) {
    this.moedas = this.moedaService.listarMoedas();
  }

  ngOnInit(): void {}
}
