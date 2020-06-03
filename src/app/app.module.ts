import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntregasListagemComponent } from './entregas-listagem/entregas-listagem.component';
import { EntregaService } from './entrega.service';

@NgModule({
  declarations: [
    AppComponent,
    EntregasListagemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ EntregaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
