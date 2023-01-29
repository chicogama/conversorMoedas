import { API_URL } from './../../../environments/environment';
import { IMoedas } from './IMoedas';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoedaService {
  constructor(private HttpClient: HttpClient) {}
  listarMoedas() {
    return this.HttpClient.get<IMoedas[]>(`${API_URL}symb`).toPromise();
  }
}
