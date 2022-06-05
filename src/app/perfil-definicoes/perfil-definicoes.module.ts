import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilDefinicoesPageRoutingModule } from './perfil-definicoes-routing.module';

import { PerfilDefinicoesPage } from './perfil-definicoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilDefinicoesPageRoutingModule
  ],
  declarations: [PerfilDefinicoesPage]
})
export class PerfilDefinicoesPageModule {}
