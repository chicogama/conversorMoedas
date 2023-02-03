import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Moeda } from 'src/app/model/Moeda';
import { API_URL } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class MoedaService {
    httpOptions = {
        headers: new HttpHeaders({
            'content-type': 'application/json',
        }),
    };

    constructor(private httpClient: HttpClient) {}
    public listarMoedas(): Observable<any> {
        return this.httpClient.get<Moeda[]>(`${API_URL}symbols`).pipe();

        /* .pipe(tap((moedas: any) => console.log(moedas))); */
    }

    public conversorMoeda(
        valor: number,
        de: string,
        para: string
    ): Observable<any> {
        return this.httpClient
            .get<any>(`${API_URL}convert?amount=1&from=USD&to=BRL`)
            .pipe();
    }
}
