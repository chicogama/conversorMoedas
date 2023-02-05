import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { MoedaService } from './moeda.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Moeda } from 'src/app/model/Moeda';

@Component({
    selector: 'app-listagem-moedas',
    templateUrl: './listagem-moedas.component.html',
    styleUrls: ['./listagem-moedas.component.css'],
})
export class ListagemMoedasComponent implements OnInit {
    moedas: Moeda[] = [];
    readonly displayedColumns = ['code', 'description'];
    dataSource = new MatTableDataSource<Moeda>(this.moedas);
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(private moedaService: MoedaService) {}

    ngOnInit(): void {
        try {
            this.obterMoeda();
        } catch (error) {
            console.log('Ocorreu um erro inesperado ' + error);
        }
    }

    obterMoeda() {
        this.moedaService.listarMoedas().subscribe((resposta) => {
            this.moedas = Object.values(resposta.symbols);
            console.log(this.moedas);
            this.dataSource = new MatTableDataSource<Moeda>(this.moedas);

            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        });
    }

    filtrarMoedas($event: any) {
        this.dataSource.filter = $event.target.value;
    }
}
