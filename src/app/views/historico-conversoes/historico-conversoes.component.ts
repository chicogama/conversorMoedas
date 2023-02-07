import { Observable } from 'rxjs';
import { OrdenaConversao } from './../../model/Conversao';
import { Component, OnInit } from '@angular/core';

import { ConversaoService } from './../conversao-moedas/conversao.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-historico-conversoes',
    templateUrl: './historico-conversoes.component.html',
    styleUrls: ['./historico-conversoes.component.css'],
})
export class HistoricoConversoesComponent implements OnInit {
    conversaoHistorico: OrdenaConversao[] = [];
    historicoCorvesoes: OrdenaConversao[] = [];

    readonly displayedColumns = [
        'data',
        'hour',
        'amount',
        'from',
        'to',
        'result',
        'rate',
    ];
    dataSource = new MatTableDataSource<OrdenaConversao>(
        this.historicoCorvesoes
    );
    constructor(private serviceConvesao: ConversaoService) {}
    ngOnInit(): void {
        this.obterHistorico();
    }

    obterHistorico() {
        if (JSON.parse(sessionStorage.getItem('conversoes') || '')) {
            this.conversaoHistorico = JSON.parse(
                sessionStorage.getItem('conversoes') || ''
            );
            console.log(this.conversaoHistorico);
            this.dataSource = new MatTableDataSource<OrdenaConversao>(
                this.conversaoHistorico
            );
        } else {
            console.log('sessionStorage sem dados');
        }
    }
}
