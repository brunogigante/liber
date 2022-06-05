import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilDefinicoesPage } from './perfil-definicoes.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilDefinicoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilDefinicoesPageRoutingModule {}
