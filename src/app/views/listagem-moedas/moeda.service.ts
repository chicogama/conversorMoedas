import { Conversao } from './../../model/Conversao';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Moeda } from 'src/app/model/Moeda';
import { API_URL } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class MoedaService {
    constructor(private httpClient: HttpClient) {}
    public listarMoedas(): Observable<any> {
        return this.httpClient.get<Moeda>(`${API_URL}symbols`).pipe();

        /* .pipe(tap((moedas: any) => console.log(moedas))); */
    }
}
