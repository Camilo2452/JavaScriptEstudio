import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {routing, appRoutinProvider} from './app.routing';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import { VideoJuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatilla.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';

import { CalculadoraPipe } from './pipes/calculadora.pipe';
import { ContactoComponent } from './contacto/contacto.component';
@NgModule({
  declarations: [
    AppComponent,
    VideoJuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    appRoutinProvider,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutinProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
