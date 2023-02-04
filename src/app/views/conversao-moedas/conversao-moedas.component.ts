import { Component, Input, OnInit } from '@angular/core';

import { MoedaService } from '../listagem-moedas/moeda.service';
import { Moeda } from './../../model/Moeda';

@Component({
    selector: 'app-conversao-moedas',
    templateUrl: './conversao-moedas.component.html',
    styleUrls: ['./conversao-moedas.component.css'],
})
export class ConversaoMoedasComponent implements OnInit {
    value: any;
    @Input() moedas: Moeda[] = [];
    constructor(private moedaService: MoedaService) {}
    ngOnInit(): void {
        try {
            this.moedaService.listarMoedas().subscribe((dados) => {
                this.moedas = Object.values(dados.symbols);
            });
        } catch (error) {
            console.log('Ocorreu um erro inesperado' + error);
        }
    }

    converterMoedas() {
        this.moedaService.conversorMoeda(1, 'USD', 'BRL');
    }
}
