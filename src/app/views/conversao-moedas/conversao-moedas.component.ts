import { Component, Input, OnInit } from '@angular/core';
import { MoedaService } from '../listagem-moedas/moeda.service';
import { Moeda } from 'src/app/model/Moeda';

@Component({
    selector: 'app-conversao-moedas',
    templateUrl: './conversao-moedas.component.html',
    styleUrls: ['./conversao-moedas.component.css'],
})
export class ConversaoMoedasComponent implements OnInit {
    @Input() conversao: any[] = [];
    constructor(private moedaService: MoedaService) {}
    ngOnInit(): void {
        this.converterMoedas();
    }

    converterMoedas() {
        this.moedaService
            .conversorMoeda(1, 'USD', 'BRL')
            .subscribe((resposta) => {
                this.conversao = Object.values(resposta.info);
            });
        console.log(this.conversao);
    }
}
