import { Observable, elementAt } from 'rxjs';
import { OrdenaConversao } from './../../model/Conversao';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { ConversaoService } from './../conversao-moedas/conversao.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
    selector: 'app-historico-conversoes',
    templateUrl: './historico-conversoes.component.html',
    styleUrls: ['./historico-conversoes.component.css'],
})
export class HistoricoConversoesComponent implements OnInit {
    @Input() conversaoHistorico: OrdenaConversao[] = [];
    historicoCorvesoes: OrdenaConversao[] = [];
    readonly displayedColumns = [
        'data',
        'hour',
        'amount',
        'from',
        'to',
        'result',
        'rate',
        'delete',
    ];
    dataSource = new MatTableDataSource<OrdenaConversao>(
        this.historicoCorvesoes
    );

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
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
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        } else {
            console.log('sessionStorage sem dados');
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
            this.dataSource.data.splice(indexDel, 1);
            sessionStorage.setItem(
                'conversoes',
                JSON.stringify(this.conversaoHistorico)
            );
        }

        console.log('Deletado: ' + id);
    }
}
