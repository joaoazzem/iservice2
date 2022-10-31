import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ComofuncionaComponent } from './pages/comofunciona/comofunciona.component';
import { FaleconoscoComponent } from './pages/faleconosco/faleconosco.component';
import { OrcamentoComponent } from './pages/orcamento/orcamento.component';
import { SobrenosComponent } from './pages/sobrenos/sobrenos.component';
import { ConfirmaComponent } from './pages/confirma/confirma.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ComofuncionaComponent,
    FaleconoscoComponent,
    OrcamentoComponent,
    SobrenosComponent,
    ConfirmaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
