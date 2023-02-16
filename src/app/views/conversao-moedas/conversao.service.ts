import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conversao, OrdenaConversao } from 'src/app/model/Conversao';
import { API_URL } from 'src/environments/environment.development';

import { Query } from './../../model/Conversao';

@Injectable({
    providedIn: 'root',
})
export class ConversaoService {
    constructor(private httpClient: HttpClient) {}

    conversaoHistorico: Array<OrdenaConversao> = [];
    historicoConversoes!: Observable<OrdenaConversao[]>;
    result!: number;

    public conversorMoeda(conversao: Query): Observable<any> {
        return this.httpClient.get<Conversao>(
            `${API_URL}convert?amount=` +
                conversao.amount +
                `&from=` +
                conversao.from +
                `&to=` +
                conversao.to
        );
    }
    verificarsessionStorage(): boolean {
        return localStorage.getItem('conversoes') !== null;
        return false;
    }

    definerHistorico(
        from: string,
        to: string,
        amount: number,
        result: number,
        rate: number,
        data: string,
        hour: string,
        maiorDezMil: boolean
    ): OrdenaConversao {
        return {
            from,
            to,
            amount,
            result,
            rate,
            data,
            hour,
            maiorDezMil,
        };
    }

    verificarValorAlto(conversao: Query, result: number): boolean {
        if (conversao.to == 'USD' && result > 100000) {
            return true;
        }
        if (conversao.to != 'USD') {
            conversao.to = 'USD';
            this.conversorMoeda(conversao).subscribe((resposta) => {
                this.result = resposta.result;
                this.verificarValorAlto(conversao, this.result);
            });
        } else {
            return false;
        }
        return false;
    }

    armazenaConversao(conversao: OrdenaConversao) {
        let existe = this.verificarsessionStorage();

        if (existe) {
            this.conversaoHistorico = JSON.parse(
                sessionStorage.getItem('conversoes') || ''
            );
        }

        if (this.conversaoHistorico.indexOf(conversao) == -1) {
            conversao.id = Number(this.conversaoHistorico.length);
            this.conversaoHistorico.push(conversao);
            sessionStorage.setItem(
                'conversoes',
                JSON.stringify(this.conversaoHistorico)
            );
        } else {
            conversao.id = 0;
            this.conversaoHistorico.push(conversao);
            sessionStorage.setItem('conversoes', JSON.stringify(conversao));
        }
    }

    deletarConversao(id: number) {
        this.conversaoHistorico = JSON.parse(
            sessionStorage.getItem('conversoes') || ''
        );

        let indexDel = this.conversaoHistorico.findIndex(
            (element) => element.id === id
        );

        if (indexDel !== -1) {
            this.conversaoHistorico.splice(indexDel, 1);
            sessionStorage.setItem(
                'conversoes',
                JSON.stringify(this.conversaoHistorico)
            );
        }

        console.log('Deletado: ' + id);
    }
}
