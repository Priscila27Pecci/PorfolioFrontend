import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componestes/acerca-de/acerca-de.component';
import { AptitudesComponent } from './componestes/aptitudes/aptitudes.component';
import { ExperienciaYEducacionComponent } from './componestes/experiencia-y-educacion/experiencia-y-educacion.component';
import { LogrosComponent } from './componestes/logros/logros.component';
import { PorfolioService } from './servicios/porfolio.service';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    AptitudesComponent,
    ExperienciaYEducacionComponent,
    LogrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    HttpClientModule
  ],
  providers: [PorfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
