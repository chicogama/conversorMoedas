import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { PrincipalComponent } from './views/principal/principal.component';
import { CabecalhoComponent } from './template/cabecalho/cabecalho.component';
import { RodapeComponent } from './template/rodape/rodape.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ConversaoMoedasComponent } from './views/conversao-moedas/conversao-moedas.component';
import { ListagemMoedasComponent } from './views/listagem-moedas/listagem-moedas.component';
import { TituloPaginaComponent } from './template/titulo-pagina/titulo-pagina.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CabecalhoComponent,
    RodapeComponent,
    ConversaoMoedasComponent,
    ListagemMoedasComponent,
    TituloPaginaComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
