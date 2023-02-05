import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './template/cabecalho/cabecalho.component';
import { RodapeComponent } from './template/rodape/rodape.component';
import { ConversaoMoedasComponent } from './views/conversao-moedas/conversao-moedas.component';
import { ListagemMoedasComponent } from './views/listagem-moedas/listagem-moedas.component';
import { PrincipalComponent } from './views/principal/principal.component';

@NgModule({
    declarations: [
        AppComponent,
        PrincipalComponent,
        CabecalhoComponent,
        RodapeComponent,
        ConversaoMoedasComponent,
        ListagemMoedasComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatToolbarModule,
        MatTableModule,
        MatButtonModule,
        HttpClientModule,
        MatPaginatorModule,
        MatSortModule,
        MatInputModule,
        MatSelectModule,
        MatInputModule,
        FormsModule,
        MatNativeDateModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
