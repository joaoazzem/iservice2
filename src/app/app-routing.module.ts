import { ConfirmaComponent } from './pages/confirma/confirma.component';
import { FaleconoscoComponent } from './pages/faleconosco/faleconosco.component';
import { SobrenosComponent } from './pages/sobrenos/sobrenos.component';
import { OrcamentoComponent } from './pages/orcamento/orcamento.component';
import { ComofuncionaComponent } from './pages/comofunciona/comofunciona.component';
import { HomeComponent } from './pages/home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    {path:'',component:HomeComponent},
    {path:'faleconosco',component:FaleconoscoComponent},
    {path:'comofunciona',component:ComofuncionaComponent},
    {path:'orcamento',component:OrcamentoComponent},
    {path:'sobrenos',component:SobrenosComponent},
    {path: 'confirma',component:ConfirmaComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
