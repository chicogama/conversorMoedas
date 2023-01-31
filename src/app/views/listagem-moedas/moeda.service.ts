import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IMoeda } from './../../model/IMoeda';
import { API_URL } from 'src/environments/environment.development';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoedaService {
  constructor(private httpClient: HttpClient) {}
  public listarMoedas() {
    return this.httpClient
      .get<IMoeda[]>(`${API_URL}`)
      .pipe(tap((moedas: any) => console.log(moedas)));
  }
}
