import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConversaoMoedasComponent } from './views/conversao-moedas/conversao-moedas.component';
import { ListagemMoedasComponent } from './views/listagem-moedas/listagem-moedas.component';
import { PrincipalComponent } from './views/principal/principal.component';
import { HistoricoConversoesComponent } from './views/historico-conversoes/historico-conversoes.component';

const routes: Routes = [
    {
        path: '',
        component: PrincipalComponent,
    },
    {
        path: 'listagem-moedas',
        component: ListagemMoedasComponent,
    },
    {
        path: 'conversao-moedas',
        component: ConversaoMoedasComponent,
    },

    {
        path: 'historico-conversoes',
        component: HistoricoConversoesComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
