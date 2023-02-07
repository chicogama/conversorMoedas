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
        hour: string
    ): OrdenaConversao {
        return {
            from,
            to,
            amount,
            result,
            rate,
            data,
            hour,
        };
    }

    armazenaConversao(conversao: OrdenaConversao) {
        let existe = this.verificarsessionStorage();

        if (existe) {
            this.conversaoHistorico = JSON.parse(
                sessionStorage.getItem('conversoes') || ''
            );
        }

        if (this.conversaoHistorico.indexOf(conversao) == -1) {
            this.conversaoHistorico.push(conversao);
            sessionStorage.setItem(
                'conversoes',
                JSON.stringify(this.conversaoHistorico)
            );
        } else {
            this.conversaoHistorico.push(conversao);
            sessionStorage.setItem('conversoes', JSON.stringify(conversao));
        }
    }

    /*     obterConversoes(): Observable<any> {
        if (JSON.parse(sessionStorage.getItem('conversoes') || '')) {
            this.conversaoHistorico = JSON.parse(
                sessionStorage.getItem('conversoes') || ''
            );
        } else {
            this.conversaoHistorico = [];
        }
        return this.historicoConversoes;
    } */
}
