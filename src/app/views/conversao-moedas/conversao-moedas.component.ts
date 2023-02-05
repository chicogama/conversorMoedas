import { ConversaoService } from './conversao.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Conversao } from './../../model/Conversao';
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
    result!: number;
    moedas: Moeda[] = [];
    conversoes: Conversao[] = [];
    conversorForm!: FormGroup;

    constructor(
        private conversorService: ConversaoService,
        private moedaService: MoedaService,
        private formB: FormBuilder
    ) {}
    ngOnInit(): void {
        this.conversorForm = this.formB.group({
            amount: ['', [Validators.required], [Validators.pattern]],
            from: ['', [Validators.required]],
            to: ['', [Validators.required]],
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
        this.conversorService
            .conversorMoeda(this.conversorForm.value)
            .subscribe((resposta: Conversao) => {});
        console.log(this.result);
        this.conversorForm.reset();
    }

    validateNumber(fieldValue: any) {
        if (isNaN(fieldValue)) {
            return {
                isValid: false,
                errorMessage: 'Please enter a valid number.',
            };
        }
        return {
            isValid: true,
        };
    }
}
