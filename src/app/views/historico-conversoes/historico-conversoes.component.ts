import { Query } from './../../model/Conversao';
import { OrdenaConversao } from 'src/app/model/Conversao';
import { Observable } from 'rxjs';
import { ConversaoService } from './../conversao-moedas/conversao.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-historico-conversoes',
    templateUrl: './historico-conversoes.component.html',
    styleUrls: ['./historico-conversoes.component.css'],
})
export class HistoricoConversoesComponent {
    conversaoHistorico: OrdenaConversao[] = [];
    constructor(private conversaoService: ConversaoService) {}

    itensHistorico(): Observable<OrdenaConversao[]> {
        this.conversaoHistorico;
    }
}
