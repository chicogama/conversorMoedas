import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { Conversao } from 'src/app/model/Conversao';

import { MoedaService } from '../listagem-moedas/moeda.service';
import { Query } from './../../model/Conversao';
import { Moeda } from './../../model/Moeda';
import { ConversaoService } from './conversao.service';

@Component({
    selector: 'app-conversao-moedas',
    templateUrl: './conversao-moedas.component.html',
    styleUrls: ['./conversao-moedas.component.css'],
})
export class ConversaoMoedasComponent implements OnInit {
    moedas: Moeda[] = [];
    conversoes: Conversao[] = [];
    query: Query[] = [];
    isResult!: boolean;
    amount!: number;
    rate!: number;
    conversorForm!: FormGroup;

    constructor(
        private conversorService: ConversaoService,
        private moedaService: MoedaService,
        private formB: FormBuilder
    ) {}
    ngOnInit(): void {
        this.conversorForm = this.formB.group({
            amount: ['', [Validators.required]],
            from: ['BRL', [Validators.required]],
            to: ['USD', [Validators.required]],
        });
        try {
            this.moedaService.listarMoedas().subscribe((dados) => {
                this.moedas = Object.values(dados.symbols);
            });
        } catch (error) {
            console.log('Ocorreu um erro inesperado' + error);
        }
    }

    converterMoedas(): void {
        try {
            this.conversorService
                .conversorMoeda(this.conversorForm.value)
                .subscribe((resposta) => {
                    this.query = Object.values(resposta.query);
                    this.amount = resposta.result;
                    this.rate = resposta.info.rate;
                    this.isResult = true;
                    console.log;
                });
        } catch (error) {
            console.log(error);
        }

        this.conversorForm.get('amount')?.reset();
    }
}
