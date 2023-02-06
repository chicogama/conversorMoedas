import { Query } from './../../model/Conversao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conversao, OrdenaConversao } from 'src/app/model/Conversao';
import { API_URL } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class ConversaoService {
    constructor(private httpClient: HttpClient) {}

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
}
